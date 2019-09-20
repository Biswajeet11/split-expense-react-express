import React from 'react';
import Axios from '../../config/Axios'
import TableRow from './Table';
import { MDBTableHead, MDBTable, MDBBtn } from 'mdbreact';
import { Link } from 'react-router-dom'
import NavBar from '../Headers/NavBar';
import SpinnerPage from '../Spinner/Spinner';
class ViewExpense extends React.Component {
	constructor() {
		super()
		this.state = {
			expenses: []
		}
	}
	componentDidMount() {
		Axios.get('/expenses')
			.then((response) => {
				this.setState({ expenses: response.data })
			})
	}
	render() {
		console.log(this.state.expenses)
		return (
			<div>
				<NavBar />
				{this.state.expenses.length === 0 ? (<div>
					<SpinnerPage />
				</div>)
					: (<div>
						<MDBBtn color="blue-grey">
							<Link to='/expenses/add'>	Blue-grey</Link>
						</MDBBtn>
						<MDBTable hover>
							<MDBTableHead color="primary-color" textWhite>
								<tr >
									<th>SlNo.</th>
									<th>Amount</th>
									<th>PaidBy</th>
									<th>Split</th>
									<th>Created At</th>
									<th>Action</th>
								</tr>
							</MDBTableHead>
							{this.state.expenses.map((expense, index) => {
								return <TableRow key={expense._id}
									index={index}
									amount={expense.amount}
									paidBy={expense.paidBy.userName}
									splitBy={expense.split}
									createdAt={expense.createdAt}
								/>
							})}
						</MDBTable>
					</div>)}
			</div>
		)
	}
}

export default ViewExpense