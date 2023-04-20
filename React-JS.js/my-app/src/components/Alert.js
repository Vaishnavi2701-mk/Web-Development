import React from "react";

export default function Alert(props) {
  return (
    <div class="alert alert-primary d-flex align-items-center" role="alert">
      <div>{props.alert.type}</div>{props.alert.msg}
    </div>
  );
}
