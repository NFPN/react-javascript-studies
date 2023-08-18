import React, { Fragment, useRef, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";
//import Wrapper from "../Helpers/Wrapper"; // Same as  React.Fragment

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, SetError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredUsername =  nameInputRef.current.value;
    const enteredAge =  ageInputRef.current.value;

    if (enteredUsername.trim().length === 0) {
      SetError({
        title: "Invalid Input",
        message: "Please enter a valid name (non-emtpy values)",
      });
      return;
    }

    //"value < 1" works(java script thing), but to make sure we compare numbers use + at the start
    // could also validate age input length but it works without validating that
    if (+enteredAge < 1) {
      SetError({
        title: "Invalid age",
        message: "Please enter a valid age (non-zero and no negative values)",
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);

    //Shoudn't do this often
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  };

  const SetErrorHandler = (event) => {
    SetError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={SetErrorHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
