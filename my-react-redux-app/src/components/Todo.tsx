import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useAppSelector } from "../hooks/useAppSelector";
import {
  addTodo,
  removeTodo,
  doneTodo,
  changeTodoVisibility,
} from "../features/todos/todosSlice";
import { useAppDispatch } from "../hooks/useAppDispatch";

const Todo: React.FC = () => {
  const { todos, loading, error, isTodosVisible } = useAppSelector(
    (state) => state.todos
  );
  const dispatch = useAppDispatch();
  const [todoItem, setTodoItem] = useState<string>('');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <h2>ToDo List Items</h2>
      <input
        type="text"
        placeholder="Do homework"
        value={todoItem}
        onChange={(e) => setTodoItem(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch(addTodo(todoItem));
          setTodoItem('');
        }}
      >
        Add
      </button>
      {isTodosVisible ? (
        <>
          <ul>
            {todos.map((todo) => (
              <>
                <li key={todo.id}>
                  {todo.title} - {todo.completed ? "Completed" : "UnCompleted"}
                </li>
                <button onClick={() => dispatch(removeTodo(todo.id))}>
                  Remove
                </button>
                <button onClick={() => dispatch(doneTodo(todo.id))}>
                  {todo.completed ? "UnDone" : "Done"}
                </button>
              </>
            ))}
          </ul>
          <button onClick={() => dispatch(changeTodoVisibility(false))}>
            Close Todos
          </button>
        </>
      ) : (
        <>
          <button onClick={() => dispatch(changeTodoVisibility(true))}>
            Show Todos
          </button>
        </>
      )}
    </>
  );
};

export default Todo;
