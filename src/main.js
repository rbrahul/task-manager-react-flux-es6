import React, { Component } from 'react';
import { render } from 'react-dom';
import TaskStore from './taskmanager/taskStore';
import TaskActions from './taskmanager/TaskActions';
import Nav from './taskmanager/nav';
import TaskLists from './taskmanager/taskListComponent';
import TaskListHeading from './taskmanager/taskListHeading';
import TaskInput from './taskmanager/taskInputForm';
 
class App extends Component {

constructor(){
super(...arguments);

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
this.setState({tasks: TaskStore.getState()});
}

showTask(){
	console.log(this.state.tasks);
}


render(){
return (
<div>
<Nav />

<TaskListHeading/>
<TaskInput/>
<TaskLists tasks={this.state.tasks} />
</div>
 
);
}
}
render(<App />, document.getElementById('app'));