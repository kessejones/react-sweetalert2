import React, { forwardRef } from 'react';
import Swal, { SweetAlertOptions } from 'sweetalert2';

interface SweetAlert2Props extends SweetAlertOptions {
    show?: boolean;
    showLoading?: boolean;
    onConfirm?: Function;
    onError?: Function;
}

type ComponentInjectSwal = React.FunctionComponent | React.ComponentClass | React.Element;

export const withSwal = (Component: ComponentInjectSwal) => {
    return forwardRef((props, ref) => (
        <Component ref={ref} swal={Swal} {...props} />
    ));
}

export default function SweetAlert2(props: SweetAlert2Props) { 
    const { show, showLoading, onConfirm, onError, ...rest } = props;

    function run(){
        if(show) {
            Swal.fire(rest).then(result => onConfirm && onConfirm(result)).catch(error => onError && onError(error));

            if(showLoading)
                Swal.showLoading();
        } else {
            Swal.close();
        }
    }

    run();
    return null;
}