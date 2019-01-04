import React, { Component } from "react";
import axios from "axios";

import TodoTitle from "./components/Todo/TodoTitle";
import Todo from "./components/Todo/Todo";
import TodoList from "./components/Todo/TodoList";

const style = {
  container: {
    width: 500,
    marginLeft: "auto",
    marginRight: "auto"
  },
  Label: {
    margin: 10
  },
  Textfield: {
    margin: 10,
    width: 300
  },
  Button: {
    margin: 10,
    padding: 10
  }
};

class App extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
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

  render() {
    const { tasks } = this.state;
    return (
      <div style={style.container}>
        <TodoTitle title={"Todo Application"} />
        <Todo
          handleSubmit={this.handleSubmit}
          styles={style}
          taskNumber={tasks.length}
        />
        <TodoList tasks={tasks} />
      </div>
    );
  }
}

export default App;
