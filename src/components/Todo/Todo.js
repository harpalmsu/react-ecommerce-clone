import "./Todo.css";
import { useState } from "react";

const Todo = () => {
  const todoUrl = "https://jsonplaceholder.typicode.com/todos/1";

  const todoList = [
    {
      id: 1,
      title: "hello",
    },
    {
      id: 2,
      title: "How are you!",
    },
  ];
  const [todos, setTodos] = useState(todoList);

  //   fetch(todoUrl)
  //     .then((res) => res.json())
  //     .then((todoList) => {
  //       console.log("todolist", todoList);
  //       setTodos(todoList);
  //     })
  //     .catch((err) => {
  //       console.log("fetch todos err", err);
  //     });

  const addNewTodo = (e) => {
    if (e.key === "Enter") {
      let newtodo = { title: e.target.value };
      setTodos([...todos, newtodo]);

      console.log("new", todos);
    }
  };

  return (
    <>
      <h1>Todo</h1>
      <div style={{ width: "1000px" }}>
        Enter New Todo:{" "}
        <input
          style={{ width: "500px", height: "30px", fontSize: 18 }}
          type="text"
          onKeyPress={addNewTodo}
        />
      </div>

      <div className="todolist-container">
        {todos.map((item) => {
          return (
            <div className="todo-container" key={item.title}>
              {item.title}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Todo;
