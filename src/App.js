import React, { Component } from "react";

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

  handleSubmit(task) {
    const newTask = {
      task: task,
      id: Date.now()
    };

    this.setState({
      tasks: [newTask, ...this.state.tasks]
    });
  }

  render() {
    const { tasks } = this.state;
    return (
      <div style={style.container}>
        <TodoTitle title={"Todo Application"} />
        <Todo
          handleSubmit={this.handleSubmit}
          styles={style}
          xyz={"some test"}
        />
        <TodoList tasks={tasks} />
      </div>
    );
  }
}

export default App;
