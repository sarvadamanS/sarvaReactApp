import React from "react";
import "../index.css";
const NavBar = () => {
  let classLinks = "text-white font-bold hover:text-primary";
  return (
    <header className="flex h-10 justify-evenly w-[100%] bg-secondary p-2 ">
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
