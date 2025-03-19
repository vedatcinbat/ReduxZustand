import { createSlice } from "@reduxjs/toolkit";
import { Todo, TodosState } from "./todosTypes";


const initialState: TodosState = {
    todos: [
        {
            id: 1,
            title: 'Do homework',
            completed: false
        },
    ],
    isTodosVisible: false,
    loading: false,
    error: null
}

const todosSlice = createSlice({
    name :'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo: Todo = {
                id: state.todos.length + 1,
                title: action.payload,
                completed: false
            }
            state.todos.push(newTodo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        doneTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        changeTodoVisibility: (state, action) => {
            state.isTodosVisible = action.payload
        }
    }
})

export const { addTodo, removeTodo, doneTodo, changeTodoVisibility } = todosSlice.actions;
export default todosSlice.reducer;