import {EventEmitter} from 'fbemitter';
import AppDispatcher from './appdispatcher';
import taskConstants from './constants';
 
const CHANGE_EVENT = 'change';
let __emitter = new EventEmitter();
let tasks = [];
 
let TaskStore = {
 
getState() {
return tasks;
},
 
addListener(callback) {
return __emitter.addListener(CHANGE_EVENT, callback);
}
 
};
 
TaskStore.dispatchToken = AppDispatcher.register((action) => {
switch (action.type) {
case taskConstants.CREATE_TASK:
tasks.push(action.task);
__emitter.emit(CHANGE_EVENT);
break;
}
 
});
 
export default TaskStore;