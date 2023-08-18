import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import "./ExpensesLoader.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function ExpenseLoader(props) {
  const [selectedYear, setExpensesyear] = useState("2021");

  const filterChangedHandler = (yearData) => {
    setExpensesyear(yearData);
  };

  const filteredExpenses = props.expenses.filter(
    (e) => e.date.getFullYear().toString() === selectedYear
  );

  return (
    <div>
      <Card className="expenses-loader">
        <ExpensesFilter
          selected={selectedYear}
          onFilterChanged={filterChangedHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default ExpenseLoader;
