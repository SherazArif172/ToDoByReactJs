import { useState } from "react";
import Expenses from "./Components/Expenses";
import NewExpenses from "./Components/NewExpenses/NewExpenses";

let DUMMY_EXPENSE = [
  {
    id: 1,
    title: "Item 1",
    amount: 20.5,
    date: new Date(2023, 1, 6),
  },
  {
    id: 2,
    title: "Item 2",
    amount: 45.75,
    date: new Date(2023, 1, 6),
  },
  {
    id: 3,
    title: "Item 3",
    amount: 12.3,
    date: new Date(2023, 1, 6),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

  const addExpenseHandler = (expense) => {
    const UpdatedExpenses = [expense, ...expenses];
    setExpenses(UpdatedExpenses);
  };

  return (
    <div>
      <NewExpenses OnAddExpenses={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
