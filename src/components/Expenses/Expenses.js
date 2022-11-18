import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import {useState} from 'react';

function Expenses(props) {
	const [filterYear, setFilterYear] = useState('2020');
	const filterExpenses = props.expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === filterYear;
	});
	const submitFilterYearHandler = (submitFilterYear) => {
		setFilterYear(submitFilterYear);
	};

	let expensesContent = <p> No Expenses found</p>;

	if (filterExpenses.length > 0) {
		expensesContent = filterExpenses.map((expense) => (
			<ExpenseItem
				key={expense.id}
				date={expense.date}
				amount={expense.amount}
				title={expense.title}
			/>
		));
	}
	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filterYear}
				onSubmitFilterYear={submitFilterYearHandler}
			/>
			{expensesContent}
		</Card>
	);
}

export default Expenses;
