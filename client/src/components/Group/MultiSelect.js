import React from 'react';
import Select from 'react-select';

class MultiSelect extends React.Component {
  state = {
    selectedOption: null,
    options: [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' },
    ]
  }

  componentDidMount() {
    console.log('hi....')
  }

  handleChange = selectedOption => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption, options } = this.state;
    return (
      <div>
        <label> Select Members </label>
        <Select
          isMulti
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
        />
      </div>
    );
  }
}

export default MultiSelect