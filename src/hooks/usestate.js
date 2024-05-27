import React, { useState } from "react";

export const UseState = () => {
  const [todo, setTodos] = useState(["apple"]);

  const addTodo = () => {
    setTodos([...todo, "Banana"]);
  };

  return (
    <>
      <button onClick={addTodo}>Click to add</button>
      {todo.map((eachtodo, index) => {
        return (
          <React.Fragment key={index}>
            <h2>{eachtodo}</h2>
          </React.Fragment>
        );
      })}
    </>
  );
};
