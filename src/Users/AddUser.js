import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import "./AddUser.css";

const AddUser = (props) => {
  let [showModal, setShowModal] = useState();

  let curMode = props.mode.mode,
    isEditMode = false,
    savedFirstName,
    savedLastName,
    savedStatus,
    savedKey;
  if (curMode === "edit") {
    console.log(curMode);
    console.log(props.mode);
    console.log(props.mode.data.firstname);
    isEditMode = true;
    savedFirstName = props.mode.data[0].firstname;
    savedLastName = props.mode.data[0].lastname;
    savedStatus = props.mode.data[0].status;
    savedKey = props.mode.key;
  }
  console.log(props.mode);
  console.log(savedStatus);
  let [enteredFirstName, setEnteredFirstName] = useState(
    isEditMode ? savedFirstName : ""
  );
  let [enteredLastName, setEnteredLastName] = useState(
    isEditMode ? savedLastName : ""
  );
  let [enteredStatus, setStatus] = useState(
    isEditMode ? savedStatus : "active"
  );

  const addUserHandler = (e) => {
    e.preventDefault();
    setEnteredLastName("");
    setEnteredFirstName("");
    if (
      enteredFirstName.trim().length === 0 ||
      enteredLastName.trim().length === 0
    ) {
      // alert("fields cant be empty");
      setShowModal({
        title: "Invalid input",
        msg: "Empty string cant be submitted",
      });
      return;
    }
    if (isEditMode) {
      props.onListHandler(enteredFirstName, enteredLastName, enteredStatus, [
        true,
        savedKey,
      ]);
      return;
    }
    props.onListHandler(enteredFirstName, enteredLastName, enteredStatus);
  };
  const modalCloseClickHandler = () => {
    // console.log(false);
    setShowModal(false);
  };
  const FirstNameChangeHandler = (e) => {
    setEnteredFirstName(e.target.value);
  };
  const LastNameChangeHandler = (e) => {
    setEnteredLastName(e.target.value);
  };
  const statusChangeHandler = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
  };
  return (
    <>
      {showModal && (
        <ErrorModal
          title={showModal.title}
          msg={showModal.msg}
          modalCloseHandler={modalCloseClickHandler}
        ></ErrorModal>
      )}
      <Card className="add-user">
        <form onSubmit={addUserHandler}>
          <label htmlFor="firstName"> First Name</label>
          <input
            id="firstName"
            type="text"
            onChange={FirstNameChangeHandler}
            value={enteredFirstName}
          ></input>
          <br></br>
          <label htmlFor="LastName">Last Name</label>
          <input
            id="LastName"
            type="text"
            onChange={LastNameChangeHandler}
            value={enteredLastName}
          ></input>{" "}
          <br></br>
          <b>Status: </b>
          <label htmlFor="active">Active</label>
          <input
            type="radio"
            id="active"
            onChange={statusChangeHandler}
            value="active"
            name="status"
            defaultChecked
          ></input>
          <label htmlFor="inactive">Inactive</label>
          <input
            type="radio"
            id="inactive"
            onChange={statusChangeHandler}
            value={"inactive"}
            name="status"
          ></input>
          <br></br>
          <Button type="submit">Add/Update contact</Button>
        </form>
      </Card>
    </>
  );
};
export default AddUser;
