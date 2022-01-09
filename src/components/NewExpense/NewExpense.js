import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
  
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
    //to close form when data submited
    setIsEditing(false);
  };
  const startNewExpense =()=>{
    setIsEditing(true);
  };
    

  const stopNewExpense = () =>{
    setIsEditing(false);
  };


  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startNewExpense}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopNewExpense}
        />
      )}
    </div>
  );
};
export default NewExpense;