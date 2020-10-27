import React, { Component } from 'react'

/**
 * A simple class which is displaying a text box. 
 * Now, as part of demo, we aim to set "focus" on text box,
 * as soon as the page loads.
 * Using refs, we can di this in 3 simple steps.
 *  * Create refs - using createRefs
 *  * Attach this ref to our input element in the render method using reserve attribute
 *  * Call focus method on this input element.
 */

export class RefsDemo extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.cbRef = null;
        this.setCbRef = (element) => {
            this.cbRef = element;
        }
    }

    componentDidMount() {
        if(this.cbRef) {
            this.cbRef.focus();
        }
        // this.inputRef.current.focus();
        // console.log('Madhu: ',this.inputRef);
    }

    clickHandler = () => {
        alert(this.inputRef.current.value);
    }
    
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}/>
                <input type='text' ref={this.setCbRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
