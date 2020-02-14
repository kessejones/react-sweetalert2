import React, { useState, useRef, forwardRef, Component } from 'react';
import SweetAlert2, { withSwal } from 'react-sweetalert2';

import './styles.css'

class ClassComponent extends Component {
    render(){
        return (
            <button onClick={e => {
                this.props.swal.fire({
                    title: 'Hello',
                    text: 'Hello World'
                });
            }}>
                {this.props.children}
            </button>
        );
    }
}

const ClassComponentSwal = withSwal(ClassComponent);

export default function Example(){

    const [show, setShow] = useState(false);
    const [swalProps, setSwalProps] = useState({});
    const buttonRef = useRef(null);

    function handleBasic() {
        setSwalProps({
            show: true,
            title: 'Basic title',
            text: 'This basic example.'
        });
    }
    
    function handleWithIcon() {
        setSwalProps({
            show: true,
            title: 'Success title',
            text: 'This success example.',
            type: 'success'
        });
    }
    
    function handleWithLoader() {
        setSwalProps({
            show: true,
            title: 'Success title',
            text: 'This success example.',
            showLoading: true
        });
    }
    
    function handleWithFooter() {
        setSwalProps({
            show: true,
            title: 'Modal Title',
            text: 'Modal text.',
            footer: 'This is footer',
        });
    }
    
    function handleWithHTMLContent() {
        setSwalProps({
            show: true,
            title: 'Modal Title',
            html: '<p>This is text with <strong>HTML</strong></p>',
        });
    }
    
    function handleWithPosition() {
        setSwalProps({
            show: true,
            title: 'Modal Title',
            text: 'Modal on top end',
            position: 'top-end'
        });
    }
    
    function handleWithTimer() {
        setSwalProps({
            show: true,
            title: 'Modal Title',
            text: 'Modal will close in 3 seconds',
            timer: 2000,
            showCancelButton: false,
            showConfirmButton: false,
        });
    }
    
    function handleWithImage() {
        setSwalProps({
            show: true,
            title: 'Sweet!',
            text: 'Modal with a custom image.',
            imageUrl: 'https://unsplash.it/400/200',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            animation: false
        });
    }

    function handleWithConfirm() {
        setSwalProps({
            show: true,
            title: 'Confirm?',
            text: 'Do you confirm the action?',
            type: 'question',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            onConfirm: result => {
                if(result.value) {
                    setSwalProps({
                        show: true,
                        title: 'Confirmed',
                        text: 'Yes clicked!',
                        type: 'success',
                    });
                }
            }
        });
    }

    return (
        <section>
            <header>
                <h3>
                    React SweetAlert2
                </h3>
            </header>
            <main>
                <div className="container-example">
                    <h4 className="title-example">
                        Basic
                    </h4>
                    <button onClick={handleBasic}>
                        Open
                    </button>
                </div>
                <div className="container-example">
                    <h4 className="title-example">
                        Success icon
                    </h4>
                    <button onClick={handleWithIcon}>
                        Open
                    </button>
                </div>
                <div className="container-example">
                    <h4 className="title-example">
                        Show loader
                    </h4>
                    <button onClick={handleWithLoader}>
                        Open
                    </button>
                </div>
                <div className="container-example">
                    <h4 className="title-example">
                        Confirm valeu
                    </h4>
                    <button onClick={handleWithConfirm}>
                        Open
                    </button>
                </div>
                <div className="container-example">
                    <h4 className="title-example">
                        Using withSwal function
                    </h4>
                    <ClassComponentSwal>
                        Open
                    </ClassComponentSwal>
                </div>
                <div className="container-example">
                    <h4 className="title-example">
                        Modal with footer
                    </h4>
                    <button onClick={handleWithFooter}>
                        Open
                    </button>
                </div>
                <div className="container-example">
                    <h4 className="title-example">
                        Modal with HTML
                    </h4>
                    <button onClick={handleWithHTMLContent}>
                        Open
                    </button>
                </div>
                <div className="container-example">
                    <h4 className="title-example">
                        Modal with position
                    </h4>
                    <button onClick={handleWithPosition}>
                        Open
                    </button>
                </div>
                <div className="container-example">
                    <h4 className="title-example">
                        Modal with timer
                    </h4>
                    <button onClick={handleWithTimer}>
                        Open
                    </button>
                </div>
                <div className="container-example">
                    <h4 className="title-example">
                        Modal with custom image
                    </h4>
                    <button onClick={handleWithImage}>
                        Open
                    </button>
                </div>
                <SweetAlert2 {...swalProps} />


                <SweetAlert2 show={true} title="OLA">
                    <form action="">
                        <label htmlFor="">Label</label>
                        <input type="text"/>
                    </form>
                </SweetAlert2>
            </main>
            <footer>
                React SweetAlert2 By <a href="https://github.com/kessejones/">Kesse Jones</a>
            </footer>
        </section>
    );
}