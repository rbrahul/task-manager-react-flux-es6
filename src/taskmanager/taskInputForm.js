import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TaskActions from './TaskActions';

export default class TaskForm extends Component{
    constructor(props){
        super(props);
    }
      addNewTask(e){
        e.preventDefault();
       
      let text=ReactDOM.findDOMNode(this.refs.texts);
      let task=text.value;
      console.log(task);
      TaskActions.createTask(task);
    }

    render(){
    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                <form onSubmit={this.addNewTask.bind(this)}>
                    <div className="col-lg-12">
                          <div className="form-group">
                          <input type="text" ref="texts" className="form-control" placeholder="Enter Ammount" />
                          </div>
                    </div>
                    
                </form>
                </div>
             </div>
        </div>
    )
}
}
