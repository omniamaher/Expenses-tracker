import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
import React from "react";
const ExpensesList = (props) => {
  const color = { color: "#1a8bcc" };
  if (props.items.length === 0){
      return <h2 style={color} className="expenses-list__fallback">Found No Expenses</h2>
  }

  return <ul className="expenses-list ">
      {props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
  </ul>
};
export default ExpensesList;
