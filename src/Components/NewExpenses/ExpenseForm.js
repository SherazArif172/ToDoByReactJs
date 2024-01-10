import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [DefaultTitle, NewTitle] = useState("");
  const [DefaultAmount, NewAmount] = useState("");
  const [DefaultDate, NewDate] = useState("");

  const TitleData = (event) => {
    NewTitle(event.target.value);
  };
  const AmountData = (event) => {
    NewAmount(event.target.value);
  };
  const DateData = (event) => {
    NewDate(event.target.value);
  };

  const SubmitHandler = (event) => {
    event.preventDefault();

    const ExpenseData = {
      title: DefaultTitle,
      amount: DefaultAmount,
      date: new Date(DefaultDate),
    };

    console.log(ExpenseData);

    props.OnSaveExpenses(ExpenseData);

    NewTitle("");
    NewAmount("");
    NewDate("");
  };

  return (
    <form onSubmit={SubmitHandler}>
      <div className="main">
        <div className="parts">
          <label>Title</label>
          <input type="text" onChange={TitleData} value={DefaultTitle} />
        </div>
        <div className="parts">
          <label>Amount</label>
          <input
            type="number"
            min={0.1}
            step={0.1}
            onChange={AmountData}
            value={DefaultAmount}
          />
        </div>
        <div className="parts">
          <label>Date</label>
          <input type="date" onChange={DateData} value={DefaultDate} />
        </div>
        <div className="buttonn">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
