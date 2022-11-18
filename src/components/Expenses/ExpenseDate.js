import './ExpenseDate.css';
function ExpenseDate(props) {
	const monthDate = props.date.toLocaleString('en-US', {month: 'long'});
	const dayDate = props.date.toLocaleString('en-US', {day: '2-digit'});
	const yearDate = props.date.getFullYear();

	return (
		<div className="expense-date">
			<div className="expense-date__month">{monthDate}</div>
			<div className="expense-date__day">{dayDate}</div>
			<div className="expense-date__year">{yearDate}</div>
		</div>
	);
}

export default ExpenseDate;
