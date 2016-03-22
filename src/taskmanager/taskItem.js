import React, {Component} from 'react';
import TaskActions from './TaskActions';

export default class TaskItem extends Component{
    constructor(props){
        super(props);
    }
    deleteTask(e){
        e.preventDefault();
        let status=confirm("Do you want to delete this task?");
        if(status==true){
           let taskIndex=e.target.getAttribute('data-task-id');
        TaskActions.deleteTask(taskIndex);
    
        }
    }
    render(){
    return (
        <div>
     
                <div className="col-md-3 portfolio-item">
                <a href="#" className="pull-right task-deleter" onClick={this.deleteTask.bind(this)} data-task-id={this.props.taskid} title="Delete Task">
               
                </a>
                    <p className="task-text">{this.props.taskitem}</p>
                </div>
                           
        </div>
    )
}
}
