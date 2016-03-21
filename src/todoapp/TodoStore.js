import {EventEmitter} from 'fbemitter';
import AppDispatcher from './appdispatcher';
import bankConstants from './constants';
 
const CHANGE_EVENT = 'change';
let __emitter = new EventEmitter();
let balance = 0;
 
let TodoStore = {
 
getState() {
return balance;
},
 
addListener(callback) {
return __emitter.addListener(CHANGE_EVENT, callback);
}
 
};
 
TodoStore.dispatchToken = AppDispatcher.register((action) => {
switch (action.type) {
case bankConstants.CREATED_ACCOUNT:
balance = 0;
__emitter.emit(CHANGE_EVENT);
break;
case bankConstants.DEPOSITED_INTO_ACCOUNT:
balance = balance + action.ammount;
__emitter.emit(CHANGE_EVENT);
break;
 
case bankConstants.WITHDREW_FROM_ACCOUNT:
balance = balance - action.ammount;
__emitter.emit(CHANGE_EVENT);
break;
}
 
});
 
export default TodoStore;