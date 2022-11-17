import './Expenses.css';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
	const data = props.data;

	return (
		<div>
			{data.map((exp) => (
				<ExpenseItem date={exp.date} amount={exp.amount} title={exp.title} />
			))}
		</div>
	);
}

export default Expenses;
