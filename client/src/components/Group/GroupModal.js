import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

class ModalPage extends Component {
	state = {
		modal: false
	}

	toggle = () => {
		this.setState({
			modal: !this.state.modal
		});
	}

	render() {
		return (
			<MDBContainer>
				<MDBModal>
					<MDBModalHeader toggle={this.toggle}>MDBModal title</MDBModalHeader>
					<MDBModalBody>
						(...)
        </MDBModalBody>
					<MDBModalFooter>
						<MDBBtn color="secondary" >Close</MDBBtn>
						<MDBBtn color="primary">Save changes</MDBBtn>
					</MDBModalFooter>
				</MDBModal>
			</MDBContainer>
		);
	}
}

export default ModalPage;
