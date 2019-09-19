import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ViewExpense from './components/Expense/ViewExpense';
import AddExpense from './components/Expense/AddExpense';
import Card from './components/Group/Card';

import './App.css'

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Login} exact={true} />
				<Route path="/register" component={Register} exact={true} />
				<Route path="/expenses" component={ViewExpense} exact={true} />
				<Route path="/expenses/add" component={AddExpense} exact={true} />
				<Route path="/expenses/group" component={Card} exact={true} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
