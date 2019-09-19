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
			amount: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	handleSubmit(e) {
		e.preventDefault()
		const addData=this.state
		console.log(this.state)
		Axios.post('/expenses',addData)
		.then((response)=>{
			console.log(response.data)
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

							<input
								type="text"
								className="form-control"
								name="paidBy"
								value={this.state.paidBy}
								onChange={this.handleChange}
							/>
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