import React, { ForwardedRef, ReactElement, useEffect } from 'react';
import Swal, { SweetAlertOptions, SweetAlertResult } from 'sweetalert2';
import ReactDOM from 'react-dom';
import { useForceRerendering } from '../Hooks';

export type SweetAlert2Props = {
    show?: boolean;
    showLoading?: boolean;
    onConfirm?: Function;
    onResolve?: Function;
    onError?: Function;
    children?: ReactElement;
} & SweetAlertOptions;

export const withSwal = <ComponentProps extends unknown = any>(
    Component: any
) => {
    return React.forwardRef((props: ComponentProps, ref: ForwardedRef<any>) => (
        <Component ref={ref} swal={Swal} {...props} />
    ));
};

export default function SweetAlert2(props: SweetAlert2Props) {
    const forceRerendering = useForceRerendering();

    useEffect(() => {
        if (props.show) {
            mountSwal();

            if (props.showLoading) {
                Swal.showLoading();
            }
        } else {
            Swal.close();
        }
    }, [props.show]);

    useEffect(() => {
        if (props.show && props.showLoading) {
            Swal.showLoading();
        } else {
            Swal.hideLoading();
        }
    }, [props.showLoading]);

    useEffect(() => {
        const swalContainer = Swal.getHtmlContainer();
        if (swalContainer) {
            const showContainer = props.text || props.html || props.children;
            swalContainer.style.display = showContainer ? 'block' : 'none';
        }
    }, [props.text, props.html, props.children]);

    function mountSwal() {
        const {
            show,
            showLoading,
            onConfirm,
            willOpen,
            onResolve,
            onError,
            children,
            ...rest
        } = props;

        rest['willOpen'] = (el: HTMLElement) => {
            forceRerendering();
            willOpen && willOpen(el);
        };

        Swal.fire(rest)
            .then((result: SweetAlertResult) => {
                if (result.isConfirmed) onConfirm && onConfirm(result);

                onResolve && onResolve(result);
            })
            .catch((error) => onError && onError(error));
    }

    const swalContainer = Swal.getHtmlContainer();
    if (swalContainer && !props.html) {
        return ReactDOM.createPortal(props.children, swalContainer);
    }

    return <></>;
}
