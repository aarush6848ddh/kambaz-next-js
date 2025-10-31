"use client";

import { useSelector, useDispatch } from "react-redux";
import { ListGroupItem, Button, FormControl } from "react-bootstrap";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  // remove dependency from
  // parent component
  const { todo } = useSelector((state: any) => state.todosReducer); // retrieve todo from reducer
  const dispatch = useDispatch(); // create dispatch instance to
  // invoke reducer functions
  return (
    <ListGroupItem>
      <Button onClick={() => dispatch(addTodo(todo))}
        id="wd-add-todo-click"
        className="btn btn-success me-2">
        Add
      </Button>
      {/* wrap reducer functions */}
      {/* with dispatch */}
      <Button onClick={() => dispatch(updateTodo(todo))}
        id="wd-update-todo-click"
        className="btn btn-warning me-2">
        Update
      </Button>
      {/* wrap reducer functions */}
      {/* with dispatch */}
      <FormControl
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
        id="wd-todo-title-input" />
      {/* wrap reducer functions */}
      {/* with dispatch */}
    </ListGroupItem>
  );
}

