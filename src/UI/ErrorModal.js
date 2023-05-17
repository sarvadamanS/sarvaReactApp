import React from "react";
import Button from "./Button";
import Card from "./Card";
import ReactDOM from "react-dom";
import "../index.css";
const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-[100%] h-[100vh] bg-black/[.3]  "
      onClick={props.modalCloseHandler}
    ></div>
  );
};
const ModalOverlay = (props) => {
  return (
    <Card className="fixed p-0 top-[30vh] left-[20%]   overflow-hidden ">
      <header className="p-1 bg-secondary">
        <h2 className="m-0 text-white text-center">{props.title}</h2>
      </header>

      <div className="p-4 text-center">
        <p>{props.msg}</p>
      </div>
      <footer className="p-2 flex justify-center">
        <Button onClick={props.modalCloseHandler}>Ok</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          msg={props.msg}
          modalCloseHandler={props.modalCloseHandler}
        />,
        document.getElementById("overlay-root")
      )}
      {ReactDOM.createPortal(
        <Backdrop modalCloseHandler={props.modalCloseHandler} />,
        document.getElementById("backdrop-root")
      )}
    </>
  );
};
export default ErrorModal;
