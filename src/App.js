import React, { useState, useEffect } from "react";
import "./App.css";

import TodoList from "./todoList/TodoList";
import { ColorRing } from "react-loader-spinner";

const App = () => {
  const [json, setJson] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => {
        setTimeout(() => {
          setJson(json);
          setLoading(true);
        }, 1000);
      });
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <TodoList value={json} />
        ) : (
          <ColorRing
            visible={true}
            height="90"
            width="90"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        )}
      </div>
    </>
  );
};

export default App;
