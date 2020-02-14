import React, { forwardRef, useEffect } from 'react';
import Swal, { SweetAlertOptions } from 'sweetalert2';
// import ReactDOM from 'react-dom';

type ComponentInjectSwal = React.FunctionComponent | React.ComponentClass | React.Element;

interface SweetAlert2Props extends SweetAlertOptions {
    show?: boolean;
    showLoading?: boolean;
    onConfirm?: Function;
    onError?: Function;
    children?: ComponentInjectSwal;
}

export const withSwal = (Component: ComponentInjectSwal) => {
    return forwardRef((props, ref) => (
        <Component ref={ref} swal={Swal} {...props} />
    ));
}


const SweetAlert2: React.FunctionComponent<SweetAlert2Props> = (props) => {
    const { show, showLoading, onConfirm, onError, onBeforeOpen, children, ...rest } = props;

    useEffect(() => {
        function run(){
            if(show) {
                rest['onBeforeOpen'] = el => {
                    if(children) {
                        // let element = Swal.getContent();
                        // ReactDOM.render(children, element);
                        // rest.html = element
                    }
                    onBeforeOpen && onBeforeOpen(el);
                };
    
                Swal.fire(rest).then(result => onConfirm && onConfirm(result)).catch(error => onError && onError(error));
    
                if(showLoading)
                    Swal.showLoading();
            } else {
                Swal.close();
            }
        }

        run();
    }, [show, showLoading]);

    return <></>;
}

export default SweetAlert2;