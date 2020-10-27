# React

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### `refs`
- Refs provide a way to access DOM nodes or React elements created in render method.
- Parent component interact with child component (App as parent to its children Button or Text) through props
- Children interact with their parent using state. 
- Refs make it possible to access DOM nodes directly within React.

### `useRef`
The below exmaple finds out how many time the page is rendered. 
```
import React, { useState, useEffect } from 'react'

export default function UseRefDemo() {
    const [name, setName] = useState('');
    const [renderCount, setRenderCount] = useState(0);

    useEffect(() => {
        setRenderCount(prevRenderCount => prevRenderCount+1)
    })

    return (
        <>
            <input value={name} onChange={event => setName(event.target.value)} />
            <div>My name is {name}...and I am not a terrorist</div>  
            <div>I rendered {renderCount} times</div>
        </>
    )
}
```

This program will go into infinite loop.
	```
	useEffect(() => {
        setRenderCount(prevRenderCount => prevRenderCount+1)
    })
    ```

When you update your state, you cause the component to re-render.
So the first time your component renders, ```setRenderCount(prevRenderCount => prevRenderCount+1)``` gonna set the state which causes the component to re-render
and then just gonna set the state again and re-render. There is no way you can do this with state.
The solution is to use something called refs.
A ref is very similar to state and that it persist between renders of your component but the important thing about ref vs state is that a ref does not cause your component to re-update when the components gets changed. 
So instead of using a state here let us use ref.
```
import React, { useState, useRef } from 'react'

export default function UseRefDemo() {
    const [name, setName] = useState('');
    const renderCount = useRef(0); 

    useEffect(() => {
        setRenderCount(prevRenderCount => prevRenderCount+1)
    })

    return (
        <>
            <input value={name} onChange={event => setName(event.target.value)} />
            <div>My name is {name}...and I am not a terrorist</div>  
            <div>I rendered {renderCount} times</div>
        </>
    )
}
```

useRef returns an object and object looks like this:
    ```{current: 0}```

It has a single property called current. By default set that current value to 0 because that's what we passed in to useRef. ```renderCount``` is just an object with a current property and when we update that property that is what gets persisted between different renders.
So, instead of 
    ```
    useEffect(() => {
        setRenderCount(prevRenderCount => prevRenderCount+1)
    })
    ```
We can take our ```renderCount``` and we can take the current property on it and we can just set that 
    ```
    useEffect(() => {
        renderCount.current = renderCount.current+1
    })
    ```
```
import React, { useState, useEffect, useRef } from 'react'

export default function UseRefDemo() {
    const [name, setName] = useState('');
    //const [renderCount, setRenderCount] = useState(0);
    const renderCount = useRef(0);

    useEffect(() => {
        //setRenderCount(prevRenderCount => prevRenderCount+1)
        renderCount.current=renderCount.current+1;
    })

    return (
        <>
            <input value={name} onChange={event => setName(event.target.value)} />
            <div>My name is {name}...and I am not a terrorist</div>  
            <div>I rendered {renderCount.current} times</div>
        </>
    )
}
```

Another use case is to set focus on a specific text box
```
import React, { useState, useEffect, useRef } from 'react'

export default function UseRefDemo() {
    const [name, setName] = useState('');
    //const [renderCount, setRenderCount] = useState(0);
    const renderCount = useRef(0);
    const inputRef = useRef();

    useEffect(() => {
        //setRenderCount(prevRenderCount => prevRenderCount+1)
        renderCount.current=renderCount.current+1;
    })

    function focus()  {
        inputRef.current.focus();
        console.log('Madhukar: ',inputRef.current);
    }

    return (
        <>
            <input ref={inputRef} value={name} onChange={event => setName(event.target.value)} />
            <div>My name is {name}...and I am not a terrorist</div>  
            {/* <div>I rendered {renderCount.current} times</div> */}
            <button onClick={focus}>Focus</button>
        </>
    )
}
```

Use Case 3: store previous value of a state
```
import React, { useState, useEffect, useRef } from 'react'

export default function UseRefDemo() {
    const [name, setName] = useState('');
    const renderCount = useRef(0);
    const prevName = useRef('');

    useEffect(() => {
        //setRenderCount(prevRenderCount => prevRenderCount+1)
        //renderCount.current=renderCount.current+1;
        prevName.current = name
    }, [name])


    return (
        <>
            <input value={name} onChange={event => setName(event.target.value)} />
            <div>My name is {name}...and previous name was {prevName.current}</div>
        </>
    )
}

```



