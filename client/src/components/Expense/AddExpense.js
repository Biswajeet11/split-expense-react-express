import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
class AddExpense extends React.Component {
	constructor() {
		super()
		this.state = {
			paidBy: '',
			notes: '',
			description: '',
			amount: ''
		}
	}
	render() {
		return (
			<MDBContainer>
				<MDBRow>
					<MDBCol md="6">
						<p>Add Expense</p>
						<form>
							<label
								className="grey-text font-weight-light"
							>
								Description
									</label>
							<input
								type="text"
								className="form-control"
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
							/>
							<label
								className="grey-text font-weight-light"
							>
								PaidBy
									</label>

							<input
								type="text"
								className="form-control"
							/>
							<br />
							<label
								className="grey-text font-weight-light"
							>	Notes </label>
							<textarea
								className="form-control"
								id="exampleFormControlTextarea1"
								rows="5"
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