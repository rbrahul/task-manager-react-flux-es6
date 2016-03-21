import React, { Component } from 'react';
import { render } from 'react-dom';
import TodoStore from './todoapp/TodoStore';
import TodoActions from './todoapp/todoaction';
 
class App extends Component {
constructor(){
super(...arguments);
TodoActions.createAccount();
this.state = {
balance: TodoStore.getState()
}
}
componentDidMount() {
this.storeSubscription = TodoStore.addListener(
data => this.handleStoreChange(data));
}
 
componentWillUnmount() {
this.storeSubscription.remove();
}
 
handleStoreChange(){
this.setState({balance: TodoStore.getState()});
}
 
deposit() {
TodoActions.depositIntoAccount(Number(this.refs.ammount.value));
this.refs.ammount.value = '';
 
}
 
withdraw() {
TodoActions.withdrawFromAccount(Number(this.refs.ammount.value));
this.refs.ammount.value = '';
}

render(){
return (
<div>
<header>FluxTrust Bank</header>
<h1>Your balance is ${(this.state.balance).toFixed(2)}</h1>
<div className="atm">
<input type="text" placeholder="Enter Ammount" ref="ammount" />
<br />
<button onClick={this.withdraw.bind(this)}>Withdraw</button>
<button onClick={this.deposit.bind(this)}>Deposit</button>
</div>
</div>
 
);
}
}
render(<App />, document.getElementById('app'));