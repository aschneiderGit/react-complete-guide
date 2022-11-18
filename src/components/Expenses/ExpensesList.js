import './ExpensesList.css';
import ExpenseItem from './ExpenseItem';

function ExpenseList(props) {
	if (props.filterExpenses.length === 0) {
		return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
	}

	return (
		<ul className="expenses-list">
			{props.filterExpenses.map((expense) => (
				<ExpenseItem
					key={expense.id}
					date={expense.date}
					amount={expense.amount}
					title={expense.title}
				/>
			))}
		</ul>
	);
}

export default ExpenseList;
