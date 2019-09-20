import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const Card = (props) => {
	return (
		<MDBCol>
			<MDBCard style={{ width: "22rem" }}>
				<MDBCardBody>
					<MDBCardTitle> Expenses </MDBCardTitle>
					<MDBCardText>
						Description:   {props.description}
					</MDBCardText>
					<MDBCardText>
						PaidBy:   {props.paidBy}
					</MDBCardText>
					<MDBCardText>
						Split:   {props.split}
					</MDBCardText>
					<MDBCardText>
						Amount:   {props.amount}
					</MDBCardText>
					<MDBCardText>
						Notes:   {props.notes}
					</MDBCardText>
				</MDBCardBody>
			</MDBCard>
		</MDBCol>
	)
}

export default Card;