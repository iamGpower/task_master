import React, { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';

import Card from '../UI/Card';
import './Expenses.css';

const Expenses = ({ expenses }) => {
	const [filteredYear, setFilteredYear] = useState('2021');

	const saveFilterHandler = (filterData) => {
		setFilteredYear(filterData);
	};

	const filteredExpenses = expenses.filter((expense) => {
		return filteredYear === expense.date.getFullYear().toString();
	});

	const sortedExpenses = filteredExpenses.sort((a, b) => {
		return a.date.getMonth() - b.date.getMonth();
	});
	console.log(sortedExpenses);

	// console.log(expense[2].date.getFullYear().toString());

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter
					defaultSelect={filteredYear}
					onSelectFilter={saveFilterHandler}
				/>
				<ExpenseChart expenses={filteredExpenses} />
				<ExpenseList expenseItems={sortedExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;
