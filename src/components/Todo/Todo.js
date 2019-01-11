import React, { Component } from "react";
import { TextField, Typography } from "@material-ui/core";
import validator from "validator";
import { connect } from "react-redux";
import { addTask } from "../../todoActions";

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
    //this.props.handleSubmit(newTask);
    this.props.addTask(newTask);
    this.setState({ task, error });
  };

  render() {
    const { taskNumber } = this.props;
    const { task, error } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <Typography component="h2" variant="display1" gutterBottom>
          Add your task here!
        </Typography>
        <TextField
          id="outlined-name"
          label="What you want to do?"
          value={task}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
          autoComplete="off"
        />
        <p style={{ color: "red" }}>{error}</p>
        <button variant="contained" color="primary">
          Add Task #{taskNumber + 1}
        </button>
        <br />
        <br />
      </form>
    );
  }
}

export default connect(
  null,
  { addTask }
)(Todo);
