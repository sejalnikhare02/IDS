import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/fontawesome-svg-core";
function Todo(props) {
  return (
    <>
      {props.todos.map((task, index) => {
        return (
          <React.Fragment key={task.id}>
            <div className="col taskBg">
              <div className={task.completed ? "done" : ""}>
                <span className="taskNumber">{index + 1}</span>
                <span className="taskText">{task.title}</span>
              </div>
              <div className="iconsWrap">
                <span
                  title="completed / Not Completed"
                  onClick={(e) => props.markDone(task.id)}
                >
                  {/* <FontAwesomeIcon icon={faCircleCheck} /> */}
                  chek
                </span>

                {task.completed ? null : (
                  <span
                    title="Edit"
                    onClick={() =>
                      props.setEditTask({
                        id: task.id,
                        title: task.title,
                        completed: task.completed ? true : false,
                      })
                    }
                  >
                    {/* <FontAwesomeIcon icon={faPen} /> */}
                    edit
                  </span>
                )}

                <span title="Delete" onClick={() => props.deleteTask(task.id)}>
                  {/* <FontAwesomeIcon icon={faTrashCan} /> */}
                  delete
                </span>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
}

export default Todo;
