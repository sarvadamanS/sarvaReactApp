import React from "react";
import "../index.css";

const Card = (props) => {
  return (
    <div
      className={`${
        "bg-slate-100 rounded-lg border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 mx-[auto] my-6 p-2 w-[90%] max-w-2xl " +
        `${props.className || ""}`
      }`}
    >
      {props.children}
    </div>
  );
};
export default Card;
