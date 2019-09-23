import React from 'react';
import { MDBBtn } from 'mdbreact';
import Axios from '../../config/Axios';
import Card from './Card';
import ModalPage from './GroupModal';
import GroupRow from './GroupRow';

class ViewGroup extends React.Component {
	constructor() {
		super()
		this.state = {
			description: '',
			amount: '',
			notes: '',
			paidBy: '',
			split: '',
			showModal: false,
			tableData:[]
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
			Axios.get('/groups')
			.then((response)=>{
				console.log('The response data is ......',response.data)
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
				<MDBBtn onClick={this.openModal}> Add Group </MDBBtn>
				<GroupRow/>
			</div>
		)
	}
}

export default ViewGroup