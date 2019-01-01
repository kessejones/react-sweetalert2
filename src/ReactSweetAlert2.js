import React, { Component } from 'react';
import swal from 'sweetalert2';
import PropTypes from 'prop-types';

class ReactSweetAlert2 extends Component {

    constructor(props, context) {
        super(props, context)
    }

    setupSwal(props){
        const {show, showLoading, onConfirm, ...restProps} = props;
        if(show){
            swal({
                ...restProps
            }).then(result => {
                if(onConfirm != null){
                    onConfirm(result);
                }
            }).catch();
            if(showLoading){
                swal.showLoading();
            }
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps != this.props)
            this.setupSwal(nextProps);
    }

    componentDidMount(){
        this.setupSwal(this.props);
    }
    
    render(){
        return null;
    }
}

ReactSweetAlert2.propsTypes = {
    show: PropTypes.bool.isRequired,
    title: PropTypes.string,
    titleText: PropTypes.string,
    html: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.oneOf(['warning', 'error', 'success', 'info', 'input']),
    footer: PropTypes.string,
    backdrop: PropTypes.bool.isRequired,
    toast: PropTypes.bool.isRequired,
    target: PropTypes.string.isRequired,
    input: PropTypes.oneOf(['text', 'email', 'password', 'number', 'tel', 'range', 'textarea', 'select', 'radio', 'checkbox', 'file', 'url']),
    width: PropTypes.number,
    padding: PropTypes.number,
    background: PropTypes.string,
    position: PropTypes.oneOf(['center', 'top', 'top-start', 'top-end', 'center-start', 'center-end', 'bottom', 'bottom-start', 'bottom-end']),
    grow: PropTypes.oneOf(['row', 'column', 'fullscreen', false]),
    customClass: PropTypes.string,
    timer: PropTypes.number,
    animation: PropTypes.bool.isRequired,
    heightAuto: PropTypes.bool.isRequired,
    allowOutsideClick: PropTypes.bool.isRequired,
    allowEscapeKey: PropTypes.bool.isRequired,
    allowEnterKey: PropTypes.bool.isRequired,
    stopKeydownPropagation: PropTypes.bool.isRequired,
    keydownListenerCapture: PropTypes.bool.isRequired,
    showConfirmButton: PropTypes.bool.isRequired,
    showCancelButton: PropTypes.bool.isRequired,
    confirmButtonText: PropTypes.string,
    cancelButtonText: PropTypes.string,
    confirmButtonColor: PropTypes.string,
    cancelButtonColor: PropTypes.string,
    confirmButtonClass: PropTypes.string,
    cancelButtonClass: PropTypes.string,
    confirmButtonAriaLabel: PropTypes.string,
    cancelButtonAriaLabel: PropTypes.string,
    buttonsStyling: PropTypes.bool.isRequired,
    reverseButtons: PropTypes.bool.isRequired,
    focusConfirm: PropTypes.bool.isRequired,
    focusCancel: PropTypes.bool.isRequired,
    showCloseButton: PropTypes.bool.isRequired,
    closeButtonAriaLabel: PropTypes.string.isRequired,
    showLoaderOnConfirm: PropTypes.bool.isRequired,
    preConfirm: PropTypes.func,
    imageUrl: PropTypes.string,
    imageWidth: PropTypes.number,
    imageHeight: PropTypes.number,
    imageAlt: PropTypes.string,
    imageClass: PropTypes.string,
    inputPlaceholder: PropTypes.string,
    inputValue: PropTypes.string,
    inputOptions: PropTypes.object.isRequired,
    inputAutoTrim: PropTypes.bool.isRequired,
    inputAttributes: PropTypes.object.isRequired,
    inputValidator: PropTypes.func,
    validationMessage: PropTypes.string,
    inputClass: PropTypes.string,
    progressSteps: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentProgressStep: PropTypes.string,
    progressStepsDistance: PropTypes.string,
    onBeforeOpen: PropTypes.func,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    onAfterClose: PropTypes.func,
    onConfirm: PropTypes.func,
    showLoading: PropTypes.bool.isRequired
}

ReactSweetAlert2.defaultProps = {
    show: false,
    title: null,
    titleText: null,
    html: null,
    text: null,
    type: null,
    footer: null,
    backdrop: true,
    toast: false,
    target: 'body',
    input: null,
    width: null,
    padding: null,
    background: null,
    position: 'center',
    grow: false,
    customClass: null,
    timer: null,
    animation: true,
    heightAuto: true,
    allowOutsideClick: true,
    allowEscapeKey: true,
    allowEnterKey: true,
    stopKeydownPropagation: true,
    keydownListenerCapture: false,
    showConfirmButton: true,
    showCancelButton: false,
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    confirmButtonColor: null,
    cancelButtonColor: null,
    confirmButtonClass: null,
    cancelButtonClass: null,
    confirmButtonAriaLabel: '',
    cancelButtonAriaLabel: '',
    buttonsStyling: true,
    reverseButtons: false,
    focusConfirm: true,
    focusCancel: false,
    showCloseButton: false,
    closeButtonAriaLabel: 'Close this dialog',
    showLoaderOnConfirm: false,
    preConfirm: null,
    imageUrl: null,
    imageWidth: null,
    imageHeight: null,
    imageAlt: '',
    imageClass: null,
    inputPlaceholder: '',
    inputValue: '',
    inputOptions: {},
    inputAutoTrim: true,
    inputAttributes: {},
    inputValidator: null,
    validationMessage: null,
    inputClass: null,
    progressSteps: [],
    currentProgressStep: null,
    progressStepsDistance: '40px',
    onBeforeOpen: null,
    onOpen: null,
    onClose: null,
    onAfterClose: null,
    onConfirm: null,
    showLoading: false
}

export default ReactSweetAlert2;