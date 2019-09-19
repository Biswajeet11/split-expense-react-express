import React from 'react'
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBBtn,
} from 'mdbreact';
import { Link } from 'react-router-dom';
import Axios from '../../config/Axios'
import './form.css'
class Register extends React.Component {
	constructor() {
		super()
		this.state = {
			userName: '',
			email: '',
			password: '',
			err: {

			}
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleChange(e) {
		console.log(e.target.value)
		this.setState({ [e.target.name]: e.target.value })
	}
	handleSubmit(e) {
		e.preventDefault()
		const registerData = {
			userName: this.state.userName,
			email: this.state.email,
			password: this.state.password,
		}
		Axios.post('/register', registerData)
			.then(response => {
				console.log(response.data)
				if(response.data.err){
					console.log(response.data.err.message)
				}
				else{
					
				}
				
			})
	}
	render() {
		return (
			<div className="form">
				<MDBContainer>
					<MDBRow>
						<MDBCol md="6">
							<MDBCard>
								<MDBCardBody>
									<form onSubmit={this.handleSubmit}>
										<p className="h4 text-center mb-4">Register</p>
										<label htmlFor="defaultFormCardNameEx" className="grey-text font-weight-light">
											UserName
										</label>
										<input
											type="text"
											id="defaultFormCardNameEx"
											className="form-control"
											name="userName"
											onChange={this.handleChange}
										/>
										<br />
										<label htmlFor="defaultFormLoginEmailEx" className="grey-text">
											Email
										</label>
										<input
											type="email"
											id="defaultFormLoginEmailEx"
											className="form-control"
											name="email"
											onChange={this.handleChange}
										/>
										<br />
										<label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
											Password
									 </label>
										<input
											type="password"
											id="defaultFormLoginPasswordEx"
											className="form-control"
											name="password"
											onChange={this.handleChange}
										/>
										<div className="text-center mt-4">
											<MDBBtn color="indigo" type="submit">Register</MDBBtn>
										</div>
										<Link className="text" to='/' > Already Registered? </Link>
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