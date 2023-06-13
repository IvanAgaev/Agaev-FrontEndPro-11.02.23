import axios from 'axios';
import { actions } from './store';

const client = axios.create({
    baseURL: 'https://6487709ebeba62972790a875.mockapi.io/api/v1/todos',
});

export const fetchUsers = () => {
    
    return function (dispatch) {
        client.get()
            .then(response => {
                dispatch(actions.renderToDo(response.data))
            })
            .catch(error => {
                console.log(error);
            })
    }
};

export const deleteUsers = (id) => {

    return function (dispatch) {
        client.delete(`${id}`)
            .catch(error => {
                console.error('Error during delete request', error);
            });
        dispatch(actions.deleteToDo(id))
    }
};

export const updateUsers = (id, todo) => {
    return function (dispatch) {
        const todoCompleted = todo.completed;
        dispatch(actions.toggleToDo(id));

        client.put(`${(id)}`, { ...todo, completed: !todoCompleted })
            .catch(error => {
                console.error('Error during PUT request', error);
            });
    }
};

export const addUser = (title) => {

    return function (dispatch) {
        client.post(``, {
            title,
            completed: false

        })
            .then(response => {
                dispatch(fetchUsers())
            })
            .catch(error => {
                console.error('Error during POST request', error);
            });
    }
};
