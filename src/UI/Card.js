import React from "react";
import "../index.css";

const Card = (props) => {
  return (
    <div
      className={`${
        "bg-white rounded-xl drop-shadow-xl mx-[auto] my-6 p-2 w-[90%] max-w-2xl " +
        `${props.className || ""}`
      }`}
    >
      {props.children}
    </div>
  );
};
export default Card;
