import React from "react";
import Button from "./Button";
import Card from "./Card";
import ReactDOM from "react-dom";
import "./ErrorModal.css";
const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.modalCloseHandler}></div>;
};
const ModalOverlay = (props) => {
  return (
    <Card className="modal">
      <header className="header">
        <h2>{props.title}</h2>
      </header>

      <div className="content">
        <p>{props.msg}</p>
      </div>
      <footer className="actions">
        <Button onClick={props.modalCloseHandler}>Ok</Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop modalCloseHandler={props.modalCloseHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          msg={props.msg}
          modalCloseHandler={props.modalCloseHandler}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};
export default ErrorModal;
