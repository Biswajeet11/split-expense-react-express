import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import GroupForm from './GroupForm';


class ModalPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		};
		this.toggle = this.toggle.bind(this);
	}

	toggle() {
		this.setState(prevState => ({
			modal: !prevState.modal
		}));
	}

	render() {
		return (
			<div>
				<Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
				<Modal isOpen={this.state.modal} className={this.props.className}>
					<ModalHeader >Add Group Members</ModalHeader>
					<ModalBody>
						<GroupForm />
						<Button color="secondary" onClick={this.toggle}> Cancel </Button>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

export default ModalPage;