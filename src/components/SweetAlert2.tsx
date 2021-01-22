import React, { useEffect } from 'react';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import ReactDOM from 'react-dom';
interface SweetAlert2Props extends SweetAlertOptions {
    show?: boolean;
    showLoading?: boolean;
    onConfirm?: Function;
    onResolve?: Function;
    onError?: Function;
    children?: React.ReactElement;
}

export const withSwal = (Component: any) => {
    return React.forwardRef((props, ref) => (
        <Component ref={ref} swal={Swal} {...props} />
    ));
}


const SweetAlert2: React.FC<SweetAlert2Props> = (props) => {
    const { show, showLoading, onConfirm, onResolve, onError, willOpen, children, ...rest } = props;

    useEffect(() => {
        mount();
    }, [props]);

    function mount(){
        if(show) {
            rest['willOpen'] = el => {
                if(children) {
                    const element = Swal.getContent();
                    ReactDOM.render(children, element);
                }
                willOpen && willOpen(el);
            };

            Swal.fire(rest).then(result => {
                if(result.isConfirmed)
                    onConfirm && onConfirm(result);

                onResolve && onResolve(result);
            }).catch(error => onError && onError(error));

            if(showLoading)
                Swal.showLoading();
        } else {
            Swal.close();
        }
    }

    return <></>;
}

export default SweetAlert2;
