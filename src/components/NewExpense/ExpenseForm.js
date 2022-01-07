import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
	const [titleData, setTitleData] = useState('');
	const [amountData, setAmountData] = useState('');
	const [dateData, setDateData] = useState('');

	// console.log(props);

	const titleDataHandler = (e) => {
		setTitleData(e.target.value);
	};

	const amountDataHandler = (e) => {
		setAmountData(e.target.value);
	};

	const dateDataHandler = (e) => {
		setDateData(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const expenseData = {
			title: titleData,
			amount: +amountData,
			date: new Date(dateData),
		};

		props.onSaveExpense(expenseData);

		setTitleData('');
		setAmountData('');
		setDateData('');
	};

	// console.log(titleData, amountData, dateData);

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input value={titleData} onChange={titleDataHandler} type={'text'} />
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						value={amountData}
						onChange={amountDataHandler}
						type="number"
						step="0.01"
						min="0.01"
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						value={dateData}
						onChange={dateDataHandler}
						type="date"
						min="2019-01-01"
						max="2023-12-31"
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
