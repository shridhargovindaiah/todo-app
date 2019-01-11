import React from "react";
import { Grid, Badge } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import Done from "@material-ui/icons/Done";

const TodoList = ({ tasks, handleComplete }) => {
  return (
    <Grid container spacing={24}>
      <Grid item xs>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task, index) => {
              return (
                <TableRow key={task.id}>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="right">{task.title}</TableCell>
                  <TableCell align="right">
                    {task.completed ? "Done" : "Pending"}
                  </TableCell>
                  <TableCell align="right">
                    <DeleteIcon color="error" />
                    {task.completed ? (
                      <Done color="disabled" />
                    ) : (
                      <Done
                        color="primary"
                        onClick={() => handleComplete(task)}
                      />
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
};

export default TodoList;
