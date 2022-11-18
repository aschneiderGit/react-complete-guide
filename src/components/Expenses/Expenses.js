import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

function Expenses(props) {
	const data = props.data;

	return (
		<Card className="expenses">
			{data.map((exp) => (
				<ExpenseItem date={exp.date} amount={exp.amount} title={exp.title} />
			))}
		</Card>
	);
}

export default Expenses;
