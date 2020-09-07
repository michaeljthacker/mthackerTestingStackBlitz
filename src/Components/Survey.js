import React, {Component} from 'react';

class Survey extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Submission: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2>{ this.props.title }</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Enter text:<br/>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Survey;