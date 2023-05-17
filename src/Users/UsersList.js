import React from "react";
import Button from "../UI/Button";

import Card from "../UI/Card";
import "../index.css";
const UserList = (props) => {
  const editListItem = (e) => {
    props.editListHandler(e.target.dataset.keyid);
  };
  const deleteListItem = (e) => {
    props.deleteListHandler(e.target.dataset.keyid);
  };
  return (
    //Render the list of saved contacts
    <Card>
      {props.listItem.length === 0 ? (
        <p className="m-2">No contacts added</p>
      ) : (
        <ul className="list-none p-1">
          {props.listItem.map((el) => (
            <li className="border-4 border-secondary m-2 p-2  " key={el.key}>
              <b>First name: </b>
              {el.firstname} <b>Last Name: </b>
              {el.lastname} <b>Status: </b>
              <span
                className={
                  el.status === "active" ? "text-green-600" : "text-red-600"
                }
              >
                {el.status}
              </span>
              <Button onClick={editListItem} dataKeyid={el.key}>
                Edit
              </Button>
              <Button onClick={deleteListItem} dataKeyid={el.key}>
                Delete
              </Button>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};
export default UserList;
