import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    // This happens because all the JSX will be converted into Javascript calls.
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} d-flex align-items-center`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
      </div>
    )
  );
}
