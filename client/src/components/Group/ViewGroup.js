import React from 'react';
import { MDBBtn } from 'mdbreact';
import Axios from '../../config/Axios';
import Card from './Card';
import ModalPage from './GroupModal';

class ViewGroup extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			description: '',
			amount: '',
			notes: '',
			paidBy: '',
			split: '',
			showModal: false
		}
	}

	openModal = (e) => {
		e.preventDefault()
		this.setState({ showModal: true })
	}
	componentDidMount() {
		const id = this.props.match.params.id
		Axios.get(`/expenses/${(id)}`)
			.then((response) => {
				console.log(response.data)
				this.setState({
					description: response.data.description,
					amount: response.data.amount,
					paidBy: response.data.paidBy,
					split: response.data.split,
					notes: response.data.notes,
				})
			})
	}

	render() {
		return (
			<div>
				<Card description={this.state.description}
					paidBy={this.state.paidBy}
					split={this.state.split}
					amount={this.state.amount}
					notes={this.state.notes}
				/>
				{this.state.showModal && (<ModalPage />)}
				<MDBBtn  onClick={this.openModal}> Add Group </MDBBtn>
			</div>
		)
	}
}

export default ViewGroup