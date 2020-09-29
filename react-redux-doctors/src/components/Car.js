import React, { Component } from 'react';

/**
 * Car class to explain lifecycle.
 */
export default class Car extends Component {
    // Mounting Lifecycle - 
    // 1. constructor - should always start by calling the super(props) before anything else, 
	// this will initiate the parent's constructor method and allows the component 
    // to inherit methods from its parent (React.Component)    
    constructor(props) {
        super(props);
        this.state = {color: 'red'};
        this.state = {show: true};
    }

    // 3. unmounting
    killCar = ()=> {
        this.setState({show: false});
    }

    // 1. Mount - getDerivedStaeFrompops
    // getDerivedStateFromProps method is called before render element in the DOM. 
    // This is the natural place to set the state object based on the initial props.
    //
    // 2. Update - getDerivedStateFromProps (using changeColor to support this)
    // a button that changes the favorite color to blue, but since the 
    // getDerivedStateFromProps() method is called, which updates the state with the 
    // color from the favcol attribute, the favorite color is still rendered as yellow:
    static getDerivedFromProps(props, state) {
        return {color: props.color};
    }

    // as part of Update
    changeColor = () => {
        // toggle between red and blue on button click. 
        // Later, shouldComponentUpdate will block from changing color
        this.setState(this.state.color==='red'?{color:'blue'}:{color:'red'});
    }

    // 2. Update - shouldComponentUpdate
    shouldComponentUpdate() {
        console.log('this.state.color ',this.state.color);
        //return (this.state.color==='red') ? false : true;
        return true;
    }

    // The render() method is required, and is the method that actually outputs the HTML to the DOM.
    render() {
        let myCar;
        if(this.state.show) {
            myCar=<ScrapCar />
        };
        return (
            <div>
            <h1>A {this.state.color} car</h1>
            <button type='button' onClick={this.changeColor}>Change color</button>
            <div id="div1"></div>
            <div id="div2"></div>
            {myCar}
            <button type="button" onClick={this.killCar}>Scrap Car</button>
            </div>
        );
    }

    // 2. Update - getSnapshotBeforeUpdate
    getSnapshotBeforeUpdate(prevProps, prevState) {
		document.getElementById("div1").innerHTML =
		"Before the update, the favorite was " + prevState.color;
	}
    
    // 2. Update - componentDidUpdate
	componentDidUpdate() {
		document.getElementById("div2").innerHTML =
		"The updated favorite is " + this.state.color;
	}

    // At first my favorite color is red, but give me a second, and it is yellow instead:
    componentDidMount() {
        setTimeout(() => {
            this.setState({color: 'yellow'})
        }, 5000)
    }
}

class ScrapCar extends Component {
    componentWillUnmount() {
        alert("The component named Car is about to be unmounted.");
    }
    
    render() {
        return (
            <h1>Hello World!</h1>
        );
    }
}