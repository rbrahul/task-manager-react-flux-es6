import React, {Component} from 'react';

export default class Pagination extends Component{
    constructor(props){
        super(props);
    }
    render(){
    return (
        <div>
     
            <div className="row text-center">
            <div className="col-lg-12">
                <ul className="pagination">
                    <li>
                        <a href="#">&laquo;</a>
                    </li>
                    <li className="active">
                        <a href="#">1</a>
                    </li>
                    <li>
                        <a href="#">2</a>
                    </li>
                    <li>
                        <a href="#">3</a>
                    </li>
                    <li>
                        <a href="#">4</a>
                    </li>
                    <li>
                        <a href="#">5</a>
                    </li>
                    <li>
                        <a href="#">&raquo;</a>
                    </li>
                </ul>
            </div>
        </div>
                           
        </div>
    )
}
}
