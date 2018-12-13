# react-sweetalert2

## Install

```
$ npm install react-sweetalert2
```

## Usage

### Basic
```javascript
import React, { Component } from 'react';
import SweetAlert from 'react-sweetalert2';

class App extends Component{
    constructor(){
        super();

        this.state = {
            swal: {}
        }
    }

    render() {
        return (
            <div>   
                <button onClick={() => {
                    this.setState({
                        swal: {
                            show: true,
                            text: 'Hello World'
                        }
                    });
                }}>Alert</button>  
                <SweetAlert {...swal} />
            </div>
        );
    }
}

```

### With Events
```javascript
import React, { Component } from 'react';
import SweetAlert from 'react-sweetalert2';

class App extends Component{
    constructor(){
        super();

        this.state = {
            swal: {}
        }
    }

    render() {
        return (
            <div>   
                <button onClick={() => {
                    this.setState({
                        swal: {
                            show: true,
                            text: 'Hello World',
                        }
                    });
                }}>Alert</button>  
                <SweetAlert {...swal}
                    onOpen={() => {
                        // code...
                    }}
                    onClose={() => {
                        // code...
                    }}
                />
            </div>
        );
    }
}

```


### With Loader
```javascript
import React, { Component } from 'react';
import SweetAlert from 'react-sweetalert2';

class App extends Component{
    constructor(){
        super();

        this.state = {
            swal: {}
        }
    }

    render() {
        return (
            <div>   
                <button onClick={() => {
                    this.setState({
                        swal: {
                            show: true,
                            showLoading: true,
                            text: 'Loading...',
                        }
                    });
                }}>Alert</button>  
                <SweetAlert {...swal}/>
            </div>
        );
    }
}

```