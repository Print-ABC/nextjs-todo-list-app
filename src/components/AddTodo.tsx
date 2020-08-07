import React, { ChangeEventHandler, MouseEventHandler } from "react";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

interface AddTodoProps {
  inputValue: string;
  onInputChange: ChangeEventHandler;
  onButtonClick: MouseEventHandler;
}

const AddTodo: React.FC<AddTodoProps> = (props) => {
  const { inputValue, onInputChange, onButtonClick } = props;
  return (
    <Paper style={{ padding: 16 }}>
      <Grid container>
        <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
          <TextField
            placeholder="Add Todo here"
            value={inputValue}
            onChange={onInputChange}
            fullWidth
          />
        </Grid>
        <Grid xs={2} md={1} item>
          <Button
            fullWidth
            color="primary"
            variant="outlined"
            onClick={onButtonClick}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddTodo;
