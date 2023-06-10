import React from 'react'
import "./App.css";
import { useState } from "react";

function Todo() {
      const [todo, setTodo] = useState("");
      const [todos, setTodos] = useState([]);
      const [edit, setEdit] = useState(false);
      const [updateValue, setUpdateValue] = useState("");

      function addTodo() {
        if (todo !== "") {
          let ogTodo = {
            id: Math.random(),
            value: todo,
          };
          setEdit(false);
          setTodos([...todos, ogTodo]);
          setTodo("");
        }
      }
      function deleteTodo(id) {
        let newTodos = todos.filter((item) => item.id !== id);
        setTodos(newTodos);
      }
      function editTodo(id) {
        console.log(id);
        let newTodos = todos.filter((item) => item.id !== id);
        let newTodos2 = [...newTodos, { id: id, value: updateValue }];
        setTodos(newTodos2);
        setEdit(false);
      }

  return (
    <div>
      <span>
        <input
          placeholder="enter todo here "
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addTodo}> add </button>
      </span>
      {todos.map((item) => {
        return (
          <span key={item.id}>
            <li>
              <span> {item.value} </span>
              {edit ? (
                <span>
                  <input
                    placeholder=""
                    value={updateValue}
                    onChange={(e) => setUpdateValue(e.target.value)}
                  />

                  <button onClick={() => editTodo(item.id)}> edit </button>
                </span>
              ) : (
                <button onClick={() => setEdit(true)}>edit </button>
              )}

              <button onClick={() => deleteTodo(item.id)}>delete </button>
            </li>
          </span>
        );
      })}
    </div>
  );
}

export default Todo