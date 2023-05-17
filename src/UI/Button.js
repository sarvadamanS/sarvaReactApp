import React from "react";
// import "./Button.css";
import "../index.css";
const Button = (props) => {
  return (
    <button
      className="button bg-secondary text-white p-2 m-2 rounded border-4 border-primary  hover:bg-secondary2"
      type={props.type || "button"}
      onClick={props.onClick}
      data-keyid={props.dataKeyid}
    >
      {props.children}
    </button>
  );
};
export default Button;
