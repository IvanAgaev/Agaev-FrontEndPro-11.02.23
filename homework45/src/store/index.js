import { createSlice, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';


import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root', // key for the root state in storage
    storage, // storage engine to use
};

const todoSlice = createSlice(
    {
        name: 'TODO',
        initialState: { todos: [{ id: 1, title: 'Почистить зубы', completed: true }] },
        reducers: {
            addToDo(state, action) {
                const todo = {
                    id: Date.now(),
                    title: action.payload,
                    completed: false
                };

                state.todos = [...state.todos, todo];
            },
            deleteToDo(state, action) {
                state.todos = state.todos.filter(todo => todo.id !== action.payload);
            },
            toggleToDo(state, action) {
                const index = state.todos.findIndex(obj => obj.id === action.payload);
                state.todos[index].completed = !state.todos[index].completed;
            }
       
        }
    }
);

const todoSliceReducer = todoSlice.reducer;
const persistedReducer = persistReducer(persistConfig, todoSliceReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
});

export const actions = todoSlice.actions;
export const persistor = persistStore(store);

