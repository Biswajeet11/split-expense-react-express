import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import Axios from '../../config/Axios'
class AddExpense extends React.Component {
	constructor() {
		super()
		this.state = {
			paidBy: '',
			notes: '',
			description: '',
			amount: '',
			users: [],
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	componentDidMount() {
		Axios.get('/')
			.then((response) => {
				const users = response.data
				this.setState({ users })
			})
	}

	handleSubmit(e) {
		e.preventDefault()
		const addData = {
			paidBy: this.state.paidBy,
			notes: this.state.notes,
			description: this.state.description,
			amount: this.state.amount,
		}
		Axios.post('/expenses', addData)
			.then((response) => {

				if (response.data.errors) {
					console.log(response.data.errors)
				}
				else {
					const _id = response.data.expense._id
					this.props.history.push(`/expenses/groups/${_id}`)
				}
			})
	}

	render() {
		return (
			<MDBContainer>
				<MDBRow>
					<MDBCol md="6">
						<p>Add Expense</p>
						<form onSubmit={this.handleSubmit}>
							<label
								className="grey-text font-weight-light">
								Description
									</label>
							<input
								type="text"
								className="form-control"
								name="description"
								value={this.state.description}
								onChange={this.handleChange}
							/>
							<br />
							<label
								className="grey-text font-weight-light"
							>
								Amount
									</label>
							<input
								type="text"
								className="form-control"
								name="amount"
								value={this.state.amount}
								onChange={this.handleChange}
							/>
							<label
								className="grey-text font-weight-light"
							>
								PaidBy
							</label>

							<select className="browser-default custom-select" value={this.state.paidBy} name="paidBy" onChange={this.handleChange}>
								<option>Select User</option>
								{this.state.users && this.state.users.map((user) => {
									return <option key={user._id} value={user._id}>{user.userName}</option>
								})}
							</select>

							<br />
							<label
								className="grey-text font-weight-light"
							>	Notes </label>
							<textarea
								className="form-control"
								id="exampleFormControlTextarea1"
								rows="5"
								name="notes"
								value={this.state.notes}
								onChange={this.handleChange}
							/>
							<div className="text-center py-4 mt-3">
								<MDBBtn className="btn btn-purple" type="submit">
									Add Expense
								<MDBIcon className="ml-2" />
								</MDBBtn>
							</div>
						</form>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		);
	};
}

export default AddExpense 