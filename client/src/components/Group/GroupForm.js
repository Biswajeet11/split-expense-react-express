import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import MultiSelect from './MultiSelect';
import { Button } from 'reactstrap';
import Axios from '../../config/Axios'

class GroupForm extends React.Component {
	constructor() {
		super()
		this.state = {
			groupMembers: [],
			groupName: '',
			groupType: '',
			selectedMembers: []
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.handleChangeSelect = this.handleChangeSelect.bind(this)
	}

	handleSubmit(e) {
		e.preventDefault()
		const membersData = this.state.selectedMembers
		let datas = []
		membersData.forEach((data) => {
			datas.push({ user: data._id })
		})
		const modalData = {
			selectedMembers: datas,
			groupName: this.state.groupName,
			groupType: this.state.groupType,
		}
		Axios.post('/groups', modalData)
			.then((response) => console.log('the group is ....', response.data))
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value })
	}

	handleChangeSelect(selectOption) {
		console.log('the options are........', selectOption)
		this.setState({ selectedMembers: selectOption })
	}

	componentDidMount() {
		Axios.get('/')
			.then((response) => {
				const members = response.data
				let userName = []
				console.log('The user data is ', members)
				members.forEach((member) => {
					console.log('the id is ....', member._id)
					userName.push({ 'value': member.userName, label: member.userName.charAt(0).toUpperCase() + member.userName.slice(1).toLowerCase(), _id: member._id })
				})
				this.setState({ groupMembers: userName })
			})
	}

	render() {
		console.log('the state is .....', this.state)
		return (
			<div>
				<Formik
					initialValues={{ groupName: this.state.groupName, groupType: this.state.groupType }}
				// validate={values => {
				// 	let errors = {};
				// 	if (!values.groupName) {
				// 		errors.groupName = 'GroupName is Required';
				// 	}
				// 	return errors;
				// }}
				>
					{({ isSubmitting }) => (
						<Form onSubmit={this.handleSubmit}>
							<label>
								GroupName:
                </label>
							<Field type="text" name="groupName" onChange={this.handleChange} value={this.state.groupName} />
							<br />
							<ErrorMessage name="groupName" component="div" />
							<label>
								GroupType:
                </label>
							<Field type="text" name="groupType" onChange={this.handleChange} value={this.state.groupType} />
							<br />
							<ErrorMessage name="groupType" component="div" />
							<MultiSelect heading={'Select Members'} groupMembers={this.state.groupMembers} handleChangeSelect={this.handleChangeSelect} />
							<br />
							<Button color="primary" > Submit </Button>{' '}
						</Form>
					)}
				</Formik>
			</div>
		)
	}
}

export default GroupForm