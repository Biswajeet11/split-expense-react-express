import React from 'react';
import Select from 'react-select';

class MultiSelect extends React.Component {
	constructor() {
		super()
		this.state = {
			selectedOption: [],
		}
	}
	handleChange = selectedOption => {
		this.setState({ selectedOption });
		this.props.handleChangeSelect(selectedOption)
	};
	render() {
		const { groupMembers } = this.props;
		const { selectedOption } = this.state;
		return (
			<div>
				<label> {this.props.heading} </label>
				<Select
					isMulti
					value={selectedOption}
					onChange={this.handleChange}
					options={groupMembers}
				/>
			</div>
		);
	}
}

export default MultiSelect