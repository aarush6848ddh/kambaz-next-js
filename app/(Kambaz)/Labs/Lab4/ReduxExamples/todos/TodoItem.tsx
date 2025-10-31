"use client";

import { useDispatch } from "react-redux";
import { ListGroupItem, Button } from "react-bootstrap";
import { deleteTodo, setTodo } from "./todosReducer";

export default function TodoItem({ todo }: {
  todo: { id: string; title: string };
}) {
  // remove dependency with
  // parent component
  const dispatch = useDispatch(); // create dispatch instance to invoke
  // reducer functions
  return (
    <ListGroupItem>
      <Button onClick={() => dispatch(deleteTodo(todo.id))}
        id="wd-delete-todo-click"
        className="btn btn-danger me-2">
        Delete
      </Button>
      {/* wrap reducer functions with dispatch */}
      <Button onClick={() => dispatch(setTodo(todo))}
        id="wd-set-todo-click"
        className="btn btn-primary me-2">
        Edit
      </Button>
      {/* wrap reducer functions with dispatch */}
      {todo.title}
      {/* render todo's title */}
    </ListGroupItem>
  );
}

