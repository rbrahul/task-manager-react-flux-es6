import AppDispatcher from './appdispatcher';
import TaskConstants from './constants';
 
let BankActions = {
 
createTask(task){
	AppDispatcher.dispatch({
	type: TaskConstants.CREATE_TASK,
	task: task
});
	console.log("create a task");
},

deleteTask(taskId){
	AppDispatcher.dispatch({
	type: TaskConstants.DELETE_TASK,
	id: taskId
});
	console.log("deleted a task");
}

 
};
 
export default BankActions;