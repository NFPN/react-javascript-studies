import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  const isEditingHandler = () => {
    setIsEditing(!isEditing);
  };

  const saveExpenseDataHandler = (expenseDataInput) => {
    const expenseData = {
      ...expenseDataInput,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={isEditingHandler}>Add new expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={isEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
