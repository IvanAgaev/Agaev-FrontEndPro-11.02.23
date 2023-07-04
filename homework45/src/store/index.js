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
        initialState: { todos: [], isLoaded: true },
        reducers: {

            deleteToDo(state, action) {
                state.todos = state.todos.filter(todo => todo.id !== action.payload);
            },
            toggleToDo(state, action) {
                const index = state.todos.findIndex(obj => obj.id === action.payload);
                state.todos[index].completed = !state.todos[index].completed;
            },
            renderToDo(state, action) {
                state.todos = [...action.payload];
                state.isLoaded = false;
            },
            isLoading(state) {
                state.isLoaded = true;
            },
            changeToLoaded(state) {
                state.isLoaded = false;
            },
          
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




