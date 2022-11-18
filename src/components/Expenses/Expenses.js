import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import {useState} from 'react';

function Expenses(props) {
	const data = props.data;
	const [filterYear, setFilterYear] = useState('2020');
	const submitFilterYearHandler = (submitFilterYear) => {
		setFilterYear(submitFilterYear);
	};

	return (
		<div>
			<p>{filterYear}</p>
			<ExpensesFilter
				selected={filterYear}
				onSubmitFilterYear={submitFilterYearHandler}
			/>
			<Card className="expenses">
				{data.map((exp) => (
					<ExpenseItem date={exp.date} amount={exp.amount} title={exp.title} />
				))}
			</Card>
		</div>
	);
}

export default Expenses;
