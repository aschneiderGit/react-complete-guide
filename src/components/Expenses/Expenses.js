import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import {useState} from 'react';
import ExpenseList from './ExpensesList';
import ExpenseChart from './ExpenseChart';

function Expenses(props) {
	const [filterYear, setFilterYear] = useState('2021');
	const filterExpenses = props.expenses.filter((expense) => {
		return expense.date.getFullYear().toString() === filterYear;
	});
	const submitFilterYearHandler = (submitFilterYear) => {
		setFilterYear(submitFilterYear);
	};

	return (
		<li>
			<Card className="expenses">
				<ExpensesFilter
					selected={filterYear}
					onSubmitFilterYear={submitFilterYearHandler}
				/>
				<ExpenseChart expenses={filterExpenses} />
				<ExpenseList filterExpenses={filterExpenses} />
			</Card>
		</li>
	);
}

export default Expenses;
