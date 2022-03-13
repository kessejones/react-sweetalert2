import React, { ReactElement } from 'react';
import { SweetAlertOptions } from 'sweetalert2';
export declare type SweetAlert2Props = {
    show?: boolean;
    showLoading?: boolean;
    onConfirm?: Function;
    onResolve?: Function;
    onError?: Function;
    children?: ReactElement;
} & SweetAlertOptions;
export declare const withSwal: <ComponentProps extends unknown = any>(Component: any) => React.ForwardRefExoticComponent<React.PropsWithoutRef<ComponentProps> & React.RefAttributes<any>>;
export default function SweetAlert2(props: SweetAlert2Props): JSX.Element;
