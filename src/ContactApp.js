import React, { useState } from "react";
import "./index.css";
import Button from "./UI/Button";
import AddUser from "./Users/AddUser";
import Card from "./UI/Card";
import UserList from "./Users/UsersList";
import NavBar from "./UI/NavBar";
function ContactApp() {
  let [listItems, setListItems] = useState([]);
  let [showForm, setShowForm] = useState();
  let [formMode, setFormMode] = useState({ mode: "create", data: [] });
  const listItemHandler = (
    firstName,
    lastName,
    curStatus,
    operation = false
  ) => {
    console.log(firstName, lastName, curStatus);
    if (operation) {
      console.log("update list");
      console.log(operation);
      setListItems((prevState) => {
        console.log(prevState);
        console.log(
          prevState.map((el) => {
            if (el.key === operation[1]) {
              el.firstname = firstName;
              el.lastname = lastName;
              el.status = curStatus;
            }
            return el;
          })
        );
        console.log(prevState[operation[1]]);

        return [...prevState];
      });
      setFormMode({ mode: "create", data: [] });
      setShowForm(false);
      return;
    }
    setListItems((prevState) => {
      return [
        ...prevState,
        {
          firstname: firstName,
          lastname: lastName,
          status: curStatus,
          key: String(Math.floor(Math.random() * 90000) + 10000),
        },
      ];
    });
    setShowForm(false);
    // setListItems((prevState)=>{return { ...prevState,{username:firstName,age:lastName,status}}});
  };
  const showFormHandler = () => {
    setShowForm(true);
  };
  const changeModeToEdit = (objToUpdate) => {
    // console.log(formMode);
    // console.log(listItems[objToUpdate]);
    if (formMode.mode === "edit") {
      alert("finish editing first");
      return;
    }
    let curData = listItems.filter((el) => el.key === objToUpdate);
    console.log(objToUpdate);
    setFormMode({
      mode: "edit",
      data: curData,
      key: objToUpdate,
    });
    setShowForm(true);
  };
  const deleteitem = (objToDelete) => {
    // console.log(formMode);
    // console.log(listItems[objToUpdate]);
    let curData = listItems.filter((el) => el.key !== objToDelete);
    setListItems(curData);
  };

  return (
    <>
      <NavBar />
      {showForm ? (
        <AddUser onListHandler={listItemHandler} mode={formMode}></AddUser>
      ) : (
        <Card className="show-form-btn z-1">
          <Button onClick={showFormHandler}>Create a contact</Button>
        </Card>
      )}
      <UserList
        className="z-1"
        listItem={listItems}
        editListHandler={changeModeToEdit}
        deleteListHandler={deleteitem}
      ></UserList>
    </>
  );
}

export default ContactApp;
