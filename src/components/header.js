import React, { Component } from 'react';
// we're using ES6 destructuring here by importing Component from React
// it's like importing React.Component
import '../css/styles.css'

/*// function
const getYear = () => {
    const myDate = new Date();
    return myDate.getFullYear();
};

// object
const user = {
    name: 'Ange',
    lastname: 'Kouakou',
    age: 16
};

// functional component
const Header = () => {
    return (
        <header>
            <div>Logo</div>
            <input type="text"/>
        </header>
    )
};*/

// class-based component
class Header extends Component {

    state = {
        title: "The keywords are: ",
        keywords: "web!"
    };

    inputChangeHandler = (event) => {
        this.setState({
			/*
			* "event" 	refers to the actual event triggered, e.g. "onChange"
			* "target" 	refers to the element from which the event is triggered, e.g. the textbox
			* "value" 	refers to the value given to the element
			* */
            keywords: event.target.value
        });
    };

    /*myCustomEventHandler = (event) => {
    	console.log(event.target.value);
	};*/

    render() {
        // console.log(this.state.keywords);
        return (
            <header>
				<div className='titled'>This is a React app</div>
                <div className='logo'>Logo</div>
                <input
                    type="text"
                    onChange={this.inputChangeHandler}
                />
				<div>{this.state.title}</div>
				<span>{this.state.keywords}</span>
            </header>
        )
    }
}

export default Header;