import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ViewExpense from './components/Expense/ViewExpense';
import AddExpense from './components/Expense/AddExpense';
import ViewGroup from './components/Group/ViewGroup';
import './App.css'


function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Login} exact={true} />
				<Route path="/register" component={Register} exact={true} />
				<Route path="/expenses" component={ViewExpense} exact={true} />
				<Route path="/expenses/add" component={AddExpense} exact={true} />
				<Route path="/expenses/groups/:id" component={ViewGroup} exact={true} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
