import React from 'react';
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBBtn
} from 'mdbreact';
import './form.css'
class Login extends React.Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: ''
		}
	}
	render() {
		return (
			<div className="form">
				<MDBContainer>
					<MDBRow>
						<MDBCol md="6">
							<MDBCard>
								<MDBCardBody>
									<form>
										<p className="h4 text-center mb-4">Sign in</p>
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
											Password
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

export default Login

