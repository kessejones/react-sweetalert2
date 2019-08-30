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
                        Using withSwal function
                    </h4>
                    <ClassComponentSwal>
                        Open
                    </ClassComponentSwal>
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
                        Using withSwal function
                    </h4>
                    <ClassComponentSwal>
                        Open
                    </ClassComponentSwal>
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
                        Using withSwal function
                    </h4>
                    <ClassComponentSwal>
                        Open
                    </ClassComponentSwal>
                </div>
                <SweetAlert2 {...swalProps} />
            </main>
            <footer>
                React SweetAlert2 By <a href="https://github.com/kessejones/">Kesse Jones</a>
            </footer>
        </section>
    );
}