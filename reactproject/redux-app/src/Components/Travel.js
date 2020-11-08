import React, {Component} from 'react'
import {holiday, expedition} from '../Libraries/library.js'


//for a component the filename and the class need to have the same name  (and CAPS!) 
class Travel extends Component{

	constructor(props){
		super(props);
		this.state={name:[]};

		const trip = new holiday(this.props.name, this.props.duration);
		this.state={name:trip};
	}

	

	render(){
			console.log(this.state.name)
			return(
				<div> Component Dest={this.props.name} passed by props directly
				<div> Component updated by props Dest={this.state.name.destination} Days={this.state.name.days}</div> </div> 
			)
	}

}


export default Travel; 