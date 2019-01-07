import React, { Component } from "react";
import validator from "validator";

class Todo extends Component {
  state = {
    task: "",
    error: ""
  };

  handleChange = e => this.setState({ task: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const task = "";
    let error = "";
    const { task: newTask } = this.state;
    if (validator.isEmpty(newTask)) {
      error = "Task can not be empty.";
      this.setState({ error });
      return;
    }
    error = "";
    this.props.handleSubmit(newTask);
    this.setState({ task, error });
  };

  render() {
    const { taskNumber } = this.props;
    const { task, error } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <label>Add your task here:-</label>
        <br />
        <br />
        <input
          type="text"
          style={{ width: 200 }}
          value={task}
          onChange={this.handleChange}
        />
        <p style={{ color: "red" }}>{error}</p>

        <button>Add Task #{taskNumber + 1}</button>
        <br />
      </form>
    );
  }
}

export default Todo;
