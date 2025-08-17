import React from "react";

function ToDoItem(props) {
  return (
    <li
      onClick={() => props.onChecked(props.id)}
      style={{ cursor: "pointer" }} // optional: shows pointer on hover
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;


