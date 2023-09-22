import React, { useState } from "react";
import "./TodoList.css";
import AddTask from "./AddTask";
import EditTask from "./EditTask";
import Todo from "./Todo";

function TodoList(props) {
  const [todos, setTodos] = useState(props.value);
  const [newTask, setNewTask] = useState("");
  const [editTask, setEditTask] = useState(""); //updateData
  const [value, setValue] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = props.json.slice(firstIndex, lastIndex);
  const npage = Math.ceil(props.json.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  const addTask = () => {
    if (newTask) {
      let newEntry = {
        id: Date.now(),
        title: newTask,
        completed: false,
      };
      setTodos([newEntry, ...todos]);
      setNewTask("");
      setValue("");
    }
  };

  //Delete task
  const deleteTask = (id) => {
    let newTask = todos.filter((task) => task.id !== id);
    setTodos(newTask);
  };

  //new task done and complete
  const markDone = (id) => {
    let completeTask = todos.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTodos(completeTask);
  };

  //cancel

  const cancelUpdate = () => {
    setEditTask("");
  };

  //change task
  const changeTask = (e) => {
    let newEntry = {
      id: editTask.id,
      title: e.target.value,
      completed: editTask.completed ? true : false,
    };
    setEditTask(newEntry);
  };

  //Edit
  const UpdateTask = () => {
    let filterRecord = [...todos].filter((task) => task.id !== editTask.id);
    let updateObj = [editTask, ...filterRecord];
    setTodos(updateObj);
    setEditTask("");
    setValue("");
  };

  const handleSearch = (e) => {
    setValue(
      props.json.filter((f) => f.title.toLowerCase().includes(e.target.value))
    );
  };

  // const handleReset = () => {};

  return (
    <>
      <h2 className="todo-heading"> To Do List </h2>

      <div className="container-app">
        {editTask && editTask ? (
          <EditTask
            editTask={editTask}
            changeTask={changeTask}
            UpdateTask={UpdateTask}
            cancelUpdate={cancelUpdate}
          />
        ) : (
          <AddTask
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
          />
        )}

        <input
          placeholder="Search..."
          type="text"
          className="form-control"
          onChange={handleSearch}
        />

        <Todo
          todos={todos}
          markDone={markDone}
          setEditTask={setEditTask}
          deleteTask={deleteTask}
        />

        <nav>
          <ul className="pagination">
            <li className="page-item">
              <a href="#" className="page-link" onClick={prePage}>
                {" "}
                Prev
              </a>
            </li>
            {numbers.map((n, i) => (
              <li
                className={`page-item ${currentPage === n ? "active" : ""}`}
                key={i}
              >
                <a href="#" className="page-link" onClick={changeCPage}>
                  {n}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a href="#" className="page-link" onClick={nextPage}>
                {" "}
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    setCurrentPage(id);
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }
}

export default TodoList;
