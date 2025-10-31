"use client";

import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer); // extract todos from reducer and remove
  // all other event handlers
  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm />
        {/* remove unnecessary attributes */}
        {todos.map((todo: { id: string; title: string }) => (
          <TodoItem
            key={todo.id}
            todo={todo} />
        ))}
        {/* remove unnecessary attributes, */}
        {/* but still pass the todo */}
      </ListGroup>
      <hr />
    </div>
  );
}

