const TodoItem = ({ todo: { done, title, status } }) => {
  return (
    <li className="list-group-item">
      <input type="checkbox" className="me-2"
        defaultChecked={done}/>
      {title} ({status})
    </li>
  );
}
export default TodoItem;
