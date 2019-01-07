import React, { Component } from "react";
import axios from "axios";

import { withStyles, Paper } from "@material-ui/core";

import TodoTitle from "./components/Todo/TodoTitle";
import Todo from "./components/Todo/Todo";
import TodoList from "./components/Todo/TodoList";

const styles = {
  root: {
    flexGrow: 1
  },
  paper: {
    paddingTop: 2,
    paddingBottom: 2,
    margin: 6,
    textAlign: "center"
  },
  textField: {
    width: 100
  }
};

function doubleTheValue(arr, callBack) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callBack(arr[i], i, arr));
  }
  return newArr;
}

class App extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    const arr = ["Jonsy", "Mike", "Mat"]; //[4, 6, 8]

    console.log(
      doubleTheValue(arr, function(el) {
        return el + " Jonathan";
      })
    );

    //Get previously added task from server
    const url = "http://jsonplaceholder.typicode.com/todos";
    axios
      .get(url)
      .then(response => {
        if (response.status === 200) {
          //const tasks = [...response.data[0]];
          this.setState({ tasks: response.data.slice(0, 10) });
        }
      })
      .catch(err => {
        console.log(err);
      });
    //Update it to state object.
  }

  handleSubmit(task) {
    // const newTask = {
    //   task: task,
    //   id: Date.now()
    // };

    // this.setState({
    //   tasks: [newTask, ...this.state.tasks]
    // });

    const newTask = {
      userId: 10,
      title: task,
      completed: false
    };
    const url = "http://jsonplaceholder.typicode.com/todos";
    axios
      .post(url, newTask)
      .then(response => {
        this.setState({
          tasks: [response.data, ...this.state.tasks]
        });
      })
      .catch(err => console.log(err));
  }

  handleComplete = task => {
    const tasks = [...this.state.tasks];
    const index = tasks.indexOf(task);
    tasks[index].completed = true;
    this.setState({ tasks });
  };

  render() {
    const { tasks } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <TodoTitle title={"Todo Application"} />
        </Paper>
        <Paper className={classes.paper}>
          <Todo handleSubmit={this.handleSubmit} taskNumber={tasks.length} />
        </Paper>
        <Paper className={classes.paper}>
          <TodoList tasks={tasks} handleComplete={this.handleComplete} />
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(App);
