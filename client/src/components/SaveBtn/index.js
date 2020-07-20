import React from "react";

function SaveBtn(props) {
  return (
    <button
      type="button"
      className="btn btn-warning"
      id={props.id}
      onClick={props.handleSave}
    >
      Save
    </button>
  );
}

export default SaveBtn;
