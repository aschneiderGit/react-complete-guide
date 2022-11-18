import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import {useState} from 'react';
import ExpenseList from './ExpensesList';

function Expenses(props) {
	const [filterYear, setFilterYear] = useState('2020');
	const filterExpenses = props.expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === filterYear;
	});
	const submitFilterYearHandler = (submitFilterYear) => {
		setFilterYear(submitFilterYear);
	};

	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={filterYear}
				onSubmitFilterYear={submitFilterYearHandler}
			/>
			<ExpenseList filterExpenses={filterExpenses} />
		</Card>
	);
}

export default Expenses;
