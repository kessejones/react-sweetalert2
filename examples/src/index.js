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
                <ReactSweetAlert2 {...this.state.swal}/>
            </div>
        );
    }
} 

ReactDOM.render(<App/>, document.getElementById('root'));