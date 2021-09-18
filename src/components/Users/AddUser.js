import React, { useState, useRef } from "react";
import Wrapper from "../Helper/Wrapper";
import Button from "../UI/Button";

import Card from "../UI/Card";
import ErrorModel from "../UI/ErrorModel";
import cssStyles from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState();

  const addUserHandle = (event) => {
    event.preventDefault();
    const userInput = {
      username: enteredUserName,
      age: enteredUserAge,
    };

    if (
      userInput.username.trim().length === 0 ||
      userInput.age.trim().length === 0
    ) {
      setError({
        title: "Invalid input!",
        message: "Please enter valid name & age (non-empty values)!",
      });
      return;
    }

    if (parseFloat(userInput.age) < 1) {
      setError({
        title: "Invalid age!",
        message: "Please enter a valid age (> 0)!",
      });
      return;
    }

    console.log(nameInputRef.current.value, ageInputRef);
    props.onAddUserHandler(userInput);
    setEnteredUserName("");
    setEnteredUserAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredUserAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={cssStyles.input}>
        <form onSubmit={addUserHandle}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={enteredUserName}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={enteredUserAge}
            ref={ageInputRef}
          />
          <Button buttonType="submit"> Add User </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
