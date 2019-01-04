import React, { Component } from "react";

class Todo extends Component {
  state = {
    task: ""
  };

  handleChange = e => this.setState({ task: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    //const task = "";
    this.props.handleSubmit(this.state.task);
    this.setState({ task: "" });
  };

  render() {
    const { styles, taskNumber } = this.props;

    return (
      <form onSubmit={this.onSubmit}>
        <label style={styles.Label}>Add your task here:-</label>
        <br />
        <input
          style={styles.Textfield}
          type="text"
          value={this.state.task}
          onChange={this.handleChange}
        />
        <br />
        <button style={styles.Button}>Add Task #{taskNumber + 1}</button>
      </form>
    );
  }
}

export default Todo;
