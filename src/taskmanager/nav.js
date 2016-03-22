import React, {Component} from 'react';

export default class Nav extends Component{
    render(){
    return (
  <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">

            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Tasks</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                
            </div>
      
        </div>
      
    </nav>
    )
}
}
