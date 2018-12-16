import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AppForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  };

  onChange(event) {
    this.setState({value: event.target.value});
  }

  onClick() {
    this.props.onSubmit(this.state.value);
    this.setState({value: ''})
  }

  render() {
    return (
      <div className="Form">
        <input className="Input" type="text" name="name" value={this.state.value} onChange={this.onChange} placeholder="Enter name"/>
        <button type="button" onClick={this.onClick}>Submit!</button>
      </div>
    );
  }
}

AppForm.propTypes = {
  onSubmit: PropTypes.func
};

AppForm.defaultProps = {
  onSubmit: () => alert('Hi!'),
};

export default AppForm;
