import React from 'react'

export default function Button(props) {
    // a simple stateless object.
    /*return (
        <button>Test</button>
    )*/
    /**
     * State object. To make state object, we use a hook called useState()
     * 
     * {getterObj, setterFn = useState(initStateValue);
     * 
     * useState function is going to return 2 items 
     *  - state object (getter)
     *  - updater function (setter)
     * stateObj can be of any type we wish it to be - String, int, array, user defined type etc.
     * 
     * Secondly, even handlers require functionRef
     */
    // const [counter, setCounter] = useState(() => {
    //     console.log('run function')
    //     return 0;
    //   });

    // decrement counter
    // const decrementCounter = () => {
    //     setCounter(counter-1);
    // }

    //increment counter
    // const incrementCounter = () => {
    //     setCounter(counter+1);
    // }
    
    return (
        <>
            <button onClick={() => props.onButtonClick(props.hopper)}>{props.name}{props.hopper}</button>
            {/* <button onClick={props.onDecrementFunction}>-</button> */}
            {/* <button onClick={() => (counter===0)?setCounter(0):setCounter(counter-1)}>-</button> */}
            {/* <button onClick={decrementCounter}>-</button> */}
            {/* <input id='madhu' type='text' value={props.message} /> */}
            {/* <button onClick={() => props.onIncrementFunction(props.hopper)}>+</button> */}
            {/* &nbsp;&nbsp;&nbsp; */}
            {/* <br /> */}
            {/* <button onClick={()=>setCounter(counter+5)}>{counter}</button> */}
        </>
    );
}
