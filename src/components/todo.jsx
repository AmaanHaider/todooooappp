import { nanoid } from "nanoid";
import { useState, use } from "react";
import { TodoInput } from "./todoInput";
import { TodoItem } from "./todoitem";

function Todo() {
  const [todosList, setTodoList] = useState([]);

  const getData = (todo) => {
    const payload = {
      title: todo,
      status: false,
      id: nanoid(5),
    };

    setTodoList([...todosList, payload]);
  };
  const handleStatus = (id) => {
    const newarr = todosList.map((e) => {
      if (e.id === id) {
        return {
          ...e,
          status: !e.status,
        };
        return e;
      }
    });
    setTodoList(newarr);
  };
  return (
    <div>
      <TodoInput getData={getData} />
      {todosList.map((e) => (
        <TodoItem handleStatus={handleStatus} todo={e}></TodoItem>
      ))}
    </div>
  );
}

export { Todo };
