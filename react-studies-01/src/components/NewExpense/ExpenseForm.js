import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  //const [expenseControl, setExpenseControl] = useState(true);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  // const expenseControlHandler = () => {
  //   setExpenseControl(!expenseControl);
  // };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  // if (expenseControl)
  //   return (
  //     <div className="new-expense-control">
  //       <button onClick={expenseControlHandler}>Add new expense</button>
  //     </div>
  //   );

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense-controls">
        <div className="new-expense-control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense-control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense-control">
          <label>Date</label>
          <input
            type="date"
            min="2021-11-01"
            max="2030-12-31"
            value={date}
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense-actions">
        {/* <button onClick={expenseControlHandler}>Cancel</button> */}
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
