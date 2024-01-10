import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  console.log("in Expanses ", props);
  return (
    <div className="sheraz">
      {props.item.map((expense) => (
        <ExpenseItem
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </div>
  );
}

export default Expenses;
