import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import "../index.css";

const AddUser = (props) => {
  let classLabel = "inline-block mb-2 p-1 font-bold";
  let classInput =
    "inline-block rounded w-[auto] p-1 m-1 border-4 border-primary focus:outline-none focus:border-emerald-300";

  let [showModal, setShowModal] = useState();

  let curMode = props.mode.mode,
    isEditMode = false,
    savedFirstName,
    savedLastName,
    savedStatus,
    savedKey;
  //If the mode is edit set the fields to given element
  if (curMode === "edit") {
    isEditMode = true;
    savedFirstName = props.mode.data[0].firstname;
    savedLastName = props.mode.data[0].lastname;
    savedStatus = props.mode.data[0].status;
    savedKey = props.mode.key;
  }
  //useState for storing form values
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
    //Update the element
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
      <Card>
        <form onSubmit={addUserHandler}>
          <label className={classLabel} htmlFor="firstName">
            {" "}
            First Name:
          </label>
          <input
            className={classInput}
            id="firstName"
            type="text"
            onChange={FirstNameChangeHandler}
            value={enteredFirstName}
          ></input>
          <br></br>
          <label className={classLabel} htmlFor="LastName">
            Last Name:
          </label>
          <input
            className={classInput}
            id="LastName"
            type="text"
            onChange={LastNameChangeHandler}
            value={enteredLastName}
          ></input>{" "}
          <br></br>
          <b>Status: </b>
          <label className={classLabel} htmlFor="active">
            Active
          </label>
          <input
            type="radio"
            id="active"
            onChange={statusChangeHandler}
            value="active"
            name="status"
            checked={enteredStatus === "active"}
          ></input>
          <label className={classLabel} htmlFor="inactive">
            Inactive
          </label>
          <input
            type="radio"
            id="inactive"
            onChange={statusChangeHandler}
            value={"inactive"}
            name="status"
            checked={enteredStatus === "inactive"}
          ></input>
          <br></br>
          <Button type="submit">Add/Update contact</Button>
        </form>
      </Card>
    </>
  );
};
export default AddUser;
