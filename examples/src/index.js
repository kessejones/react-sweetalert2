import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactSweetAlert2 from '../../lib'

import './styles.css';

class App extends Component{
    constructor(){
        super();

        this.state = {
            swal: {}
        }
    }

    render(){
        return (
            <div>
                <section>
                    <h3>Basic Message</h3>
                    <button onClick={() => {
                        this.setState({
                            swal: {
                                show: true,
                                text: 'Hello World'
                            }
                        });
                    }}>OPEN</button>
                </section>
                <section>
                    <h3>A title with a text under</h3>
                    <button onClick={() => {
                        this.setState({
                            swal: {
                                show: true,
                                title: 'The Internet?',
                                text: 'That thing is still around?',
                                type: 'question'
                            }
                        });
                    }}>OPEN</button>
                </section>
                <section>
                    <h3>A modal with a title, an error icon, a text, and a footer</h3>
                    <button onClick={() => {
                        this.setState({
                            swal: {
                                show: true,
                                type: 'error',
                                title: 'Oops...',
                                text: 'Something went wrong!',
                                footer: '<a href>Why do I have this issue?</a>'
                            }
                        });
                    }}>OPEN</button>
                </section>
                <section>
                    <h3>A modal with a Loading</h3>
                    <button onClick={() => {
                        this.setState({
                            swal: {
                                show: true,
                                showLoading: true,
                                title: 'Loading...'
                            }
                        });
                    }}>OPEN</button>
                </section>
                <section>
                    <h3>A modal with confirm value</h3>
                    <button onClick={() => {
                        this.setState({
                            swal: {
                                show: true,
                                type: 'question',
                                text: 'Are you sure?',
                                title: "You won't be able to revert this?",
                                confirmButtonText: 'Yes, delete it!',
                                showConfirmButton: true,
                                showCancelButton: true,
                                onConfirm: result => {
                                    if(result.value){
                                        this.setState({
                                            swal: {
                                                show: true,
                                                title: 'Deleted!',
                                                text: 'Your file has been deleted.',
                                                type: 'success'
                                            }
                                        });
                                    }
                                }
                            }
                        });
                    }}>OPEN</button>
                </section>
                <section>
                    <h3>A modal with Input and confirm value</h3>
                    <button onClick={() => {
                        this.setState({
                            swal: {
                                show: true,
                                type: 'question',
                                text: 'Write your name.',
                                title: "What is your name?",
                                input: 'text',
                                showConfirmButton: true,
                                showCancelButton: true,
                                onConfirm: result => {
                                    if(result.value){
                                        this.setState({
                                            swal: {
                                                show: true,
                                                text: `Hello ${result.value}`,
                                                type: 'success'
                                            }
                                        });
                                    }
                                }
                            }
                        });
                    }}>OPEN</button>
                </section>
                <ReactSweetAlert2 {...this.state.swal}/>
            </div>
        );
    }
} 

ReactDOM.render(<App/>, document.getElementById('root'));