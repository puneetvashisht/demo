









import dispatcher from '../dispatcher';

export function createTodo(text, completed){
    dispatcher.dispatch({type:"CREATE_TODO", text: text, complete: completed});
}

export function deleteTodo(id){
    dispatcher.dispatch({type:"DELETE_TODO", id: id});
}

