import React from 'react'
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBBtn
} from 'mdbreact';
class Register extends React.Component {
	render() {
		return (
			<div>
				<MDBContainer>
					<MDBRow>
						<MDBCol md="6">
							<MDBCard>
								<MDBCardBody>
									<form>
										<p className="h4 text-center mb-4">Register</p>
										<label htmlFor="defaultFormCardNameEx" className="grey-text font-weight-light">
											UserName
										</label>
										<input
											type="text"
											id="defaultFormCardNameEx"
											className="form-control"
										/>
										<label htmlFor="defaultFormLoginEmailEx" className="grey-text">
											Email
										</label>
										<input
											type="email"
											id="defaultFormLoginEmailEx"
											className="form-control"
										/>
										<br />
										<label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
											Your password
									 </label>
										<input
											type="password"
											id="defaultFormLoginPasswordEx"
											className="form-control"
										/>
										<div className="text-center mt-4">
											<MDBBtn color="indigo" type="submit">Login</MDBBtn>
										</div>
									</form>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
					</MDBRow>
				</MDBContainer>
			</div>
		)
	}
}

export default Register