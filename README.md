[![Test](https://github.com/kessejones/react-sweetalert2/actions/workflows/test.yml/badge.svg?branch=master)](https://github.com/kessejones/react-sweetalert2/actions/workflows/test.yml)
[![Coverage Status](https://img.shields.io/coveralls/github/kessejones/react-sweetalert2)](https://coveralls.io/github/kessejones/react-sweetalert2?branch=master)

# React sweetalert2

## Install

```
$ npm i react-sweetalert2
```
or
```
$ yarn add react-sweetalert2
```


## Usage

#### Functional Component

```javascript

import React, { useState } from 'react';
import SweetAlert2 from 'react-sweetalert2';

export default function App(){
    const [swalProps, setSwalProps] = useState({});
    return (
        <div>
            <button onClick={() => {
                setSwalProps({
                    show: true,
                    title: 'Basic Usage',
                    text: 'Hello World',
                });
            }}>
                Open
            </button>

            <SweetAlert2 {...swalProps} />
        </div>
    );
}

```

#### Class Component
```javascript
import React, { Component } from 'react';
import SweetAlert2 from 'react-sweetalert2';

export default class App extends Component{
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
                            title: 'Basic Usage',
                            text: 'Hello World'
                        }
                    });
                }}>Alert</button>  
                <SweetAlert2 {...this.state.swal} />
            </div>
        );
    }
}



```
#### Using `withSwal` function


##### Inject `swal` props into Functional Component

```javascript
import React from 'react';
import { withSwal } from 'react-sweetalert2';

export default withSwal((props, ref) => {
    const { swal, ...rest } = props;

    function handleClick(){
        swal.fire({
            title: 'Example',
            text: 'Swal injected',
            icon: 'success',
        });
    }
    
    return (
        <button onClick={handleClick}>
            Open
        </button>
    );
});

```

##### Inject `swal` props into Class Component

```javascript
import React from 'react';
import { withSwal } from 'react-sweetalert2';

class ExampleComponent extends Component {
    
    function handleClick(){
        this.swal.fire({
            title: 'Example',
            text: 'Swal injected',
            icon: 'success',
        });
    }

    render(){
        return (
            <button onClick={this.handleClick.bind(this)}>
                Open
            </button>
        );
    }
}

export default withSwal(ExampleComponent);

```

#### Events

##### Using `SweetAlert2` component

```javascript
import React, { useState } from 'react';
import SweetAlert2 from 'react-sweetalert2';

export default function App(){
    const [swalProps, setSwalProps] = useState({});

    function handleClick(){
        setSwalProps({
            show: true,
            title: 'Example',
            text: 'Hello World',
        }); 
    }

    return (
        <div>   
            <button onClick={handleClick}>
                Alert
            </button>  
            <SweetAlert2 {...swalProps}
                didOpen={() => {
                    // run when swal is opened...
                }}
                didClose={() => {
                    // run when swal is closed...
                }}
                onConfirm={result => {
                    // run when clieked in confirm and promise is resolved...
                }}
                onError={error => {
                    // run when promise rejected...
                }}
                onResolve={result => {
                    // run when promise is resolved...
                }}
            />
        </div>
    );
}
```

##### Using `swal` prop injected


```javascript
import React from 'react';
import { withSwal } from 'react-sweetalert2';

export default withSwal(({ swal }, ref) => (
    <button onClick={e => {
        swal.fire({
            title: 'Example',
            text: 'Hello World',
            didOpen: () => {
                // run when swal is opened...
            },
            didClose: () => {
                // run when swal is closed...
            }
        }).then(result => {
            // when confirmed and promise resolved...
        }).catch(error => {
            // when promise rejected...
        });
    }}>
        Show Alert
    </button>  
));

```

##### Using content from HTML and React elements

```javascript
import React, { useState } from 'react';
import SweetAlert2 from 'react-sweetalert2';

export default function App(){
    const [swalProps, setSwalProps] = useState({});

    function handleClick(){
        setSwalProps({
            show: true,
            title: 'Example'
        }); 
    }

    return (
        <div>   
            <button onClick={handleClick}>
                Alert
            </button>  
            <SweetAlert2 {...swalProps}>
                <h1>
                    Hello World!
                </h1>
            </SweetAlert2>
        </div>
    );
}

```
