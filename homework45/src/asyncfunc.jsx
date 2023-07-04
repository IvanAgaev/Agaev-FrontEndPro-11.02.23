import axios from 'axios';
import { actions } from './store';

const client = axios.create({
    baseURL: 'https://6487709ebeba62972790a875.mockapi.io/api/v1/todos',
});

export const fetchUsers = () => {

    return async function (dispatch) {
        try {
            dispatch(actions.isLoading());
            const response = await client.get();
            dispatch(actions.changeToLoaded());
            dispatch(actions.renderToDo(response.data));
        } catch (error) {
            alert(error);
            dispatch(actions.changeToLoaded());
        }
    };
};

export const deleteUsers = (id) => {

    return async function (dispatch) {
        try {
            dispatch(actions.isLoading())
            const response = await client.delete(`${id}`);
            dispatch(actions.changeToLoaded());
            dispatch(actions.deleteToDo(id))
        }
        catch (error) {
            alert(error);
            dispatch(actions.changeToLoaded());
        }
      
           
        
    }
};

export const updateUsers = (id, todo) => {

    return async function (dispatch) {
        try {
            const todoCompleted = todo.completed;
            dispatch(actions.isLoading());
            const response = await client.put(`${(id)}`, { ...todo, completed: !todoCompleted });
            dispatch(actions.changeToLoaded());
            dispatch(actions.toggleToDo(id));
        } 
        catch (error) {
            alert(error);
            dispatch(actions.changeToLoaded());
        }
        
    }
};

export const addUser = (title) => {

    return async function (dispatch) {
        try {
            dispatch(actions.isLoading())
             await client.post(``, {
                title,
                completed: false

             });
           
            dispatch(fetchUsers());
            dispatch(actions.changeToLoaded());
        }
        catch (error) {
            alert(error);
            dispatch(actions.changeToLoaded())
        }
          
    }
};
