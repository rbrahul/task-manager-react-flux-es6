import React, {Component} from 'react';

export default class TaskItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
    return (
        <div>
     
                <div className="col-md-3 portfolio-item">
                    <p>{this.props.taskitem}</p>
                </div>
                           
        </div>
    )
}
}
