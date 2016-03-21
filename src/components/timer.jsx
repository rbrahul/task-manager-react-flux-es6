import React, {Component} from 'react';

export default class Timer extends Component{
	constructor(props){
		super(props);
		this.state={second:0};
	}
	tick(){
		let timer=setInterval(()=>{
			this.setState({second:this.state.second+1});
		},1000);
	}
	componentDidMount(){
		this.tick();
	}
	render(){
		return (<h2>Timer: {this.state.second}</h2>)
	}
}
