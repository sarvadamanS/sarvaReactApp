import React from "react";
import "../index.css";
const NavBar = () => {
  let classLinks =
    "text-white font-bold hover:text-primary active:text-primary";
  return (
    <header className="flex h-10 justify-evenly border-b-8 border-indigo-100 w-[100%] bg-cyan-700 p-2 ">
      <a className={classLinks} href="/contacts">
        Contacts App
      </a>
      <a className={classLinks} href="/maps">
        Maps and Graphs
      </a>
      <a className={classLinks} href="/about">
        About
      </a>
    </header>
  );
};
export default NavBar;
