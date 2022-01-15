import React, { ForwardedRef, ReactElement } from 'react';
import Swal, { SweetAlertOptions, SweetAlertResult } from 'sweetalert2';
import ReactDOM from 'react-dom';

export type SweetAlert2Props = {
    show?: boolean;
    showLoading?: boolean;
    onConfirm?: Function;
    onResolve?: Function;
    onError?: Function;
    children?: ReactElement;
} & SweetAlertOptions;

export const withSwal = <ComponentProps extends unknown = any>(Component: any) => {
    return React.forwardRef((props: ComponentProps, ref: ForwardedRef<any>) => (
        <Component ref={ref} swal={Swal} {...props} />
    ));
}

export default class SweetAlert2 extends React.Component<SweetAlert2Props> {

    private mountSwal(){
        const { show, onConfirm, willOpen, onResolve, onError, children, ...rest } = this.props;

        if(!show) {
            Swal.close();
            return;
        }

        rest['willOpen'] = (el: HTMLElement) => {
            this.mountChildrenIfNeeded(this.props.children);
            willOpen && willOpen(el);
        }

        Swal.fire(rest).then((result: SweetAlertResult) => {
            if (result.isConfirmed)
                onConfirm && onConfirm(result);

            onResolve && onResolve(result);
        }).catch(error => onError && onError(error));
    }

    private mountChildrenIfNeeded(children?: ReactElement){
        if(!children) return;

        this.mountChildren(children); 
    }

    private mountChildren(children: ReactElement){
        const swalContainer = Swal.getHtmlContainer();
        if (!swalContainer) return;

        ReactDOM.render(children, swalContainer);
        swalContainer.style.display = 'block'
    }
    
    private unmountChildren(){
        const swalContainer = Swal.getHtmlContainer();
        if (!swalContainer) return;

        ReactDOM.unmountComponentAtNode(swalContainer);
        swalContainer.style.display = 'none'
    }

    private updateChildren(children?: ReactElement) {
        if(children) {
            this.mountChildren(children);
        } else{
            this.unmountChildren();
        }
    }

    shouldComponentUpdate(nextProps: any, nextState: any, nextContext: any){
        if(nextProps.children != this.props.children) {
            this.updateChildren(nextProps.children)
        }

        return (nextProps.show && !this.props.show);
    }

    componentDidUpdate(){
        this.mountSwal();
    }

    componentDidMount(){
        this.mountSwal();
    }

    render() {
        return <></>;
    }
}

