import React from "react";
import { useRef, useState } from "react";

//create your first component
function Todolist() {
  let nombreRef = useRef(null);
  const [task, setTask] = useState([]);

  const addTask = () => {
    if (e.keyCode === 13 && nombreRef.value !== "") {
      setTask(task.concat(nombreRef.value));
      nombreRef.value = "";
    }
  };

  const DeleteTask = (index) => {
    task.splice(index, 1);
    setTask([...task]);
  };

  return (
    <div className="container">
      <div class="card mt-5">
        <div class="card-body">
          <h1 class="card-title text-center">Todos</h1>
          <ul class="list-group list-group-flush">
            <div class="input-group mb-3 list-group list-group-flush">
              <input
                onKeyUp={addTask}
                ref={(r) => (nombreRef = r)}
                type="text"
                id="input"
                class="list-group-item"
                placeholder="What needs to be done?"
              />
            </div>
            {!!task.length > 0 &&
              task.map((valor, index) => {
                return (
                  <li class="list-group-item" key={index}>
                    {valor}{" "}
                    <i
                      className="fas fa-trash float-right"
                      id="eliminar"
                      onClick={() => DeleteTask(index)}
                    ></i>
                  </li>
                );
              })}
          </ul>
        </div>
        <div class="card-footer text-muted">
          Things to do {task.length}
        </div>
      </div>
    </div>
  );
}

export default Todolist;
