import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
function NewExpense(props) {
	const submitDataHandler = (newExpenseData) => {
		const expenseData = {
			id: Date.now(),
			...newExpenseData,
		};
		props.onAddExpense(expenseData);
	};
	return (
		<div className="new-expense">
			<ExpenseForm onSubmitData={submitDataHandler} />
		</div>
	);
}

export default NewExpense;
