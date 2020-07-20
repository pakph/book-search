import React from "react";

function DeleteBtn(props) {
  return (
    <button
      type="button"
      className="btn btn-danger deleteBtn"
      id={props.id}
      onClick={props.handleDelete}
    >
      Delete
    </button>
  );
}

export default DeleteBtn;
