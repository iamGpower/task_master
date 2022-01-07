import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	const saveExpenseHandler = (expenseData) => {
		const expense = {
			id: Math.floor(Math.random() * 10),
			...expenseData,
		};

		props.onAddExpense(expense);
		setIsEditing(false);
	};

	const stopEditingHandler = () => {
		setIsEditing(false);
	};

	const startEditingHandler = () => {
		setIsEditing(true);
	};

	return (
		<div className="new-expense">
			{!isEditing && (
				<button onClick={startEditingHandler}>Add New Expense</button>
			)}

			{isEditing && (
				<ExpenseForm
					onSaveExpense={saveExpenseHandler}
					onCancel={stopEditingHandler}
				/>
			)}
		</div>
	);
};

export default NewExpense;
