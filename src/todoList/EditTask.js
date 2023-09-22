import React from "react";

function EditTask(props) {
  return (
    <>
      <div className="roe mb-3">
        <div className="col">
          <input
            type="text"
            value={props.EditTask && props.EditTask.title}
            onChange={props.changeTask}
            className="form-control form-control-sm"
          />
        </div>

        <div className="col-auto">
          <button
            onClick={props.UpdateTask}
            className="btn btn-sm btn-info mr-20"
          >
            Update
          </button>

          <button
            className="btn btn-sm btn-danger"
            onClick={props.cancelUpdate}
          >
            {" "}
            cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default EditTask;
