import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import {useState} from 'react';
function NewExpense(props) {
	const [showForm, setShowForm] = useState(false);
	const hideHandler = () => setShowForm(false);
	const showHandler = () => setShowForm(true);
	const openFormButton = (
		<button onClick={showHandler}> Add New Expense</button>
	);

	const submitDataHandler = (newExpenseData) => {
		const expenseData = {
			id: Date.now(),
			...newExpenseData,
		};
		props.onAddExpense(expenseData);
	};

	const expenseNewContent = showForm ? (
		<ExpenseForm onSubmitData={submitDataHandler} onCancel={hideHandler} />
	) : (
		openFormButton
	);

	return <div className="new-expense">{expenseNewContent}</div>;
}

export default NewExpense;
