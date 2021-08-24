import React, { ForwardedRef, useEffect } from 'react';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import ReactDOM from 'react-dom';
export interface SweetAlert2Props extends SweetAlertOptions {
    show?: boolean;
    showLoading?: boolean;
    onConfirm?: Function;
    onResolve?: Function;
    onError?: Function;
    children?: React.ReactElement;
}

export const withSwal = <ComponentProps extends unknown = any>(Component: any) => {
    return React.forwardRef((props: ComponentProps, ref: ForwardedRef<any>) => (
        <Component ref={ref} swal={Swal} {...props} />
    ));
}

const SweetAlert2 = (props: SweetAlert2Props) => {
    const { show, showLoading, onConfirm, onResolve, onError, willOpen, children, ...rest } = props;

    useEffect(() => {
        mount();
    }, [props]);

    function mount() {
        if (show) {
            rest['willOpen'] = (el: HTMLElement) => {
                if (children) {
                    const element = Swal.getContent();
                    ReactDOM.render(children, element);
                }
                willOpen && willOpen(el);
            };

            Swal.fire(rest).then(result => {
                if (result.isConfirmed)
                    onConfirm && onConfirm(result);

                onResolve && onResolve(result);

                if(children) {
                    const element = Swal.getContent();
                    if (element) {
                        ReactDOM.unmountComponentAtNode(element);
                    }
                } 
            }).catch(error => onError && onError(error));

            if (showLoading)
                Swal.showLoading();
        } else {
            Swal.close();
        }
    }

    return <></>;
}

export default SweetAlert2;
