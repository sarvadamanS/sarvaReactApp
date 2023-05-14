import React from "react";
import Button from "../UI/Button";

import Card from "../UI/Card";
import "./UsersList.css";
const UserList = (props) => {
  const editListItem = (e) => {
    props.editListHandler(e.target.dataset.keyid);
  };
  const deleteListItem = (e) => {
    props.deleteListHandler(e.target.dataset.keyid);
  };
  return (
    <Card className="users">
      {props.listItem.length === 0 ? (
        <p>No contacts added</p>
      ) : (
        <ul>
          {props.listItem.map((el) => (
            <li key={el.key}>
              <b>First name: </b>
              {el.firstname} <b>Last Name: </b>
              {el.lastname} <b>Status: </b>
              {el.status}
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
