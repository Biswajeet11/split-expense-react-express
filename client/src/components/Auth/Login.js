import React from 'react';
import {
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBCard,
	MDBCardBody,
	MDBBtn,
} from 'mdbreact';
import Axios from '../../config/Axios';
import { Link } from 'react-router-dom';
import './form.css';
class Login extends React.Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
			err: '',
			isAuthenticated: false
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
		const loginData = {
			email: this.state.email,
			password: this.state.password,
		}
		Axios.post('/login', loginData)
			.then(response => {
				console.log(response.data)
				if (response.data.err) {
					this.setState({ err: response.data.err })
				}
				else {
					const tokenData = response.data.token
					console.log(response.data.token)
					localStorage.setItem('token', tokenData)
					this.setState({ isAuthenticated: true })
					this.props.history.push('/expenses')
					console.log('authenticated..', this.state.isAuthenticated)
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
										<p className="h4 text-center mb-4">Sign In</p>
										<label htmlFor="defaultFormLoginEmailEx" className="grey-text">
											Email
                      </label>
										<input
											type="email"
											id="defaultFormLoginEmailEx"
											className="form-control"
											name='email'
											value={this.state.email}
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
											name='password'
											value={this.state.password}
											onChange={this.handleChange}
										/>
										<div className="text-center mt-4">
											<MDBBtn color="indigo" type="submit">Login</MDBBtn>
										</div>
										<br />
										<Link className="text" to="/register">Register </Link>
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

