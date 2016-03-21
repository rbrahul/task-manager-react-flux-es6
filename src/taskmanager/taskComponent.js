import React, { Component } from 'react';
import { render } from 'react-dom';
import TaskStore from './TaskStore';
import TaskActions from './TaskActions';

 
class App extends Component {
constructor(){
super(...arguments);
TaskActions.createTask();
this.state = {
tasks: TaskStore.getState()
}
}
componentDidMount() {
this.storeSubscription = TaskStore.addListener( 
data => this.handleStoreChange(data));
}
 
componentWillUnmount() {
this.storeSubscription.remove();
}
 
handleStoreChange(){
this.setState({tasks: TodoStore.getState()});
}

showTask(){
	console.log(this.state.tasks);
}


render(){
return (
<div>


<div className="atm">
<input type="text" placeholder="Enter Ammount" ref="ammount" />
<br />
<button onClick={this.showTask.bind(this)}>Save</button>
</div>
</div>
 
);
}
}
render(<App />, document.getElementById('main'));