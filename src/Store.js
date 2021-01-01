import { configureStore, createSlice } from '@reduxjs/toolkit';

// // constants declearation
//     const ADD = "ADD";
//     const DELETE = "DELETE";
// //

// const addTodo = (text) => {
//     return {
//         text,
//         type: ADD
//     };
// };

// const deleteTodo = (id) => {
//     return {
//         id,
//         type: DELETE
//     };
// };

const toDos = createSlice({
    name: 'toDosReducer',
    initialState: [],
    reducers: {
        add: (state, action) => { state.push({ text: action.payload, id: Date.now() })},
        remove: (state, action) => { console.log(state); state.filter(todo => todo.id !== action.payload); }
    }
});

// const addTodo = createAction("ADD");
// const deleteTodo = createAction("DELETE");

// const reducer = createReducer([], {
//     [addTodo]: (state, action) => { state.push({ text: action.payload, id: Date.now() })},
// [deleteTodo]: (state, action) => { console.log(state); state.filter(todo => todo.id !== action.payload); }
// });

// const reducer = (state = [], action) => {

//     switch(action.type) {

//         case addTodo.type:
//             return [{ text: action.text, id: Date.now() }, ...state];
//         case deleteTodo.type:
//             return state.filter(todo => todo.id !== action.id);
//         default:
//             return state;
//     }
// }

const store = configureStore({reducer: toDos.reducer});

export const {add, remove} = toDos.actions;

export default store;