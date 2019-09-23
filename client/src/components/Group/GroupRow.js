import React from 'react'
import { Table } from 'reactstrap';

class GroupRow extends React.Component {
	constructor() {
		super()

	}
	render() {
		return (
			<Table dark>
				<thead>
					<tr>
						<th> Sl.No. </th>
						<th>Name</th>
						<th>Spent</th>
						<th>Reimbursment</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope="row"></th>
						<td>{this.props.userName}</td>
						<td>{this.props.amountSpent}</td>
						<td>{this.props.reimbursement}</td>
					</tr>
				</tbody>
			</Table>
		)
	}

}


export default GroupRow


// {this.state.customers.map((customer, index) => {
// 	return (
// 		<EditTable key={customer._id} customerId={customer._id} index={index} name={customer.name} email={customer.email} mobile={customer.mobile} handleSave={this.handleSave} />
// 	)
// })}