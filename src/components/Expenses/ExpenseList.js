import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
const ExpenseList = ({ expenseItems }) => {
	if (expenseItems.length === 0) {
		return <h3 className="expenses-list__fallback">No Expense found.</h3>;
	}

	return (
		<ul className="expenses-list">
			{expenseItems.map((expense, index) => {
				return (
					<ExpenseItem
						key={expense.id}
						title={expense.title}
						amount={expense.amount}
						date={expense.date}
					/>
				);
			})}
		</ul>
	);
};

export default ExpenseList;
