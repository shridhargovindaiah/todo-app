import React from "react";
import {
  Grid,
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const TodoList = ({ tasks, handleComplete }) => {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        {tasks.map(task => {
          return (
            <ListItem key={task.id}>
              <ListItemText>
                {task.title} - {task.completed ? "Done" : "Pending"}
              </ListItemText>
              <ListItemSecondaryAction>
                <DeleteIcon />
                {task.completed ? (
                  <button disabled>Completed</button>
                ) : (
                  <button onClick={() => handleComplete(task)}>
                    Completed
                  </button>
                )}
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default TodoList;
