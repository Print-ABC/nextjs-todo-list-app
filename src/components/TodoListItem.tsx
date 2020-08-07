import React, { MouseEventHandler } from "react";
import {
  List,
  ListItem,
  Checkbox,
  IconButton,
  ListItemText,
  ListItemSecondaryAction,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";

interface TodoListItemProps {
  task: any;
  onCheckBoxToggle: MouseEventHandler;
  checked: boolean;
  text: string;
  onButtonClick: MouseEventHandler;
}

const useStyles = makeStyles((theme) => ({
  strikeThroughText: {
    textDecoration: "line-through",
  },
}));

const TodoListItem: React.FC<TodoListItemProps> = (props) => {
  const classes = useStyles();
  const { onCheckBoxToggle, checked, text, onButtonClick } = props;
  return (
    <ListItem divider>
      <Checkbox
        color="primary"
        onClick={onCheckBoxToggle}
        checked={checked}
        disableRipple
      />
      <ListItemText primary={text} className={checked && classes.strikeThroughText} />
      <ListItemSecondaryAction>
        <IconButton onClick={onButtonClick}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoListItem;
