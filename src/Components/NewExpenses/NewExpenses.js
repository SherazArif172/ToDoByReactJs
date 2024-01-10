import React from "react";
import "./NewExpenses.css";
import ExpenseForm from "./ExpenseForm";

function NewExpenses(props) {
  const FormCollector = (EnteredExpenseData) => {
    const expenseData = {
      ...EnteredExpenseData,
      id: Math.random().toString(),
    };

    props.OnAddExpenses(expenseData);
    console.log(expenseData);
  };

  return (
    <div className="">
      <ExpenseForm OnSaveExpenses={FormCollector} />
    </div>
  );
}

export default NewExpenses;
