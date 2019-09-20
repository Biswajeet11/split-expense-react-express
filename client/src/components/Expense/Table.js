import React from 'react';
import { MDBTableBody } from 'mdbreact';

const TableRow = (props) => {
	return (
		<MDBTableBody>
			<tr>
				<td>{props.index + 1}</td>
				<td>{props.amount}</td>
				<td>{props.paidBy}</td>
				<td>{props.splitBy}</td>
				<td>{props.createdAt}</td>
				<td><i className="fa fa-edit" /> <i className="far fa-file-alt" /></td>
			</tr>
		</MDBTableBody>
	);
}

export default TableRow;
