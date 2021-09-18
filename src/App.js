import React, { Fragment, useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

// const DUMMY_USERS = [
//   { id: 1, username: "Ahmed Osama", age: 25 },
//   { id: 2, username: "Ahmed Osama", age: 25 },
//   { id: 3, username: "Ahmed Osama", age: 25 },
//   { id: 4, username: "Ahmed Osama", age: 25 },
//   { id: 5, username: "Ahmed Osama", age: 25 },
// ];

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    console.log(user);
    var userId = Math.random();
    user.id = userId;
    setUsers((prevUsers) => {
      return [user, ...prevUsers];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUserHandler={addUserHandler} />
      <UsersList users={users} />
    </Fragment>
  );
}

export default App;
