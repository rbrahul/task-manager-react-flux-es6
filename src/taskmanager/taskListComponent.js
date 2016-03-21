import React, {Component} from 'react';
import TaskItem from './taskItem.js';

export default class TaskList extends Component{
    constructor(props){
        super(props);
        this.state={
            tasks:this.props.tasks
        }

    }
    componentDidMount(){
        this.setState({tasks:this.props.tasks});
        console.log(this.state.tasks);
    }

    render(){
        const taskitems=this.state.tasks.map((task)=>{
            return <TaskItem taskitem={task}/>
        }.bind(this))
    return (
        <div>
         <div className="row">
              {taskitems}
                
            </div>
        </div>
    )
}
}
