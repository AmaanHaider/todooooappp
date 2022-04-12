export const TodoItem = ({ todo, handleStatus }) => {
  return (
    <div className="tododetails">
      <div className="todoID">id:{todo.id}</div>
      <div className="title">TODO:{todo.title}</div>
      <div className="todostatus">{todo.status ? "Done" : "Not done"}</div>
      <button
        id="todoBtn"
        onClick={() => {
          handleStatus(todo.id);
        }}
      >
        Toggle
      </button>
    </div>
  );
};
