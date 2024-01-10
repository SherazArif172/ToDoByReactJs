import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";

function ExpenseItem(props) {
  return (
    <div className="main">
      <ExpenseDate date={props.date} />
      <div className="description">
        <h2>{props.title}</h2>
        <div className="price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
