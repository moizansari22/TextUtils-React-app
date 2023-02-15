import React from "react";

export default function Alert(props) {
  return (
    <div className={`alert alert-${props.myalert.type} alert-dismissible fade show role="alert" `}>
      {props.myalert.message}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}
