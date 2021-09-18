import React from "react";
import Card from "../UI/Card";
import cssStyles from "./UsersList.module.css";
const UsersList = (props) => {
  if (props.users.length === 0) {
    return (
      <Card className={cssStyles.users}>
        <ul>No Users.</ul>
      </Card>
    );
  }
  return (
    <Card className={cssStyles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.age} Years old. )
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
