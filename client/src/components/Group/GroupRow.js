import React from 'react'
import { Table } from 'reactstrap';

function GroupRow(props) {
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
					<td>{props.userName}</td>
					<td>{props.amountSpent}</td>
					<td>{props.reimbursement}</td>
				</tr>
			</tbody>
		</Table>
	);
}


export default GroupRow