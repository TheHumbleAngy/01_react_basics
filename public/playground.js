/*
import { Component } from 'react';
import JSON from '../src/db';
*/

class Car {
    constructor() {
        this.a = 5;
        this.b = 7;
    }

    /*alertBrand() {
        console.log('BMW');
    }*/
}

class Ford extends Car {
    constructor() {
        super();
        this.c = 10;
    }
}

const car = new Ford();
// console.log(car.c);

/*
class Playground extends Component {

	state = {
		news: JSON
	};

	render() {
		console.log(this.state.news);
		return (
			<div>
				<h5>Test from playground component</h5>
			</div>
		)
	}
}

export default Playground;*/
