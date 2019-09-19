import React, { Component } from "react";
import {
	MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem,
	MDBNavbarToggler, MDBCollapse, MDBBtn, MDBIcon
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class NavBar extends Component {
	state = {
		isOpen: false
	}

	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen })
	}

	render() {
		return (
			<Router>
				<MDBNavbar color="default-color" dark expand="md">
					<MDBNavbarBrand>
						<strong className="white-text">Expense App</strong>
					</MDBNavbarBrand>
					<MDBNavbarToggler onClick={this.toggleCollapse} />
					<MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
						<MDBNavbarNav right>
							<MDBNavItem>
								<MDBBtn>
									<MDBIcon icon="user-alt" />
								</MDBBtn>
							</MDBNavItem>
						</MDBNavbarNav>
					</MDBCollapse>
				</MDBNavbar>
			</Router>
		)
	}
}

export default NavBar;