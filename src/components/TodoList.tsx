import React, { MouseEventHandler } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper
} from "@material-ui/core";
import TodoListItem from "./TodoListItem";

interface TodoListProps {
    items: any
    onItemRemove: MouseEventHandler
    onItemCheck: MouseEventHandler
}

const TodoList: React.FC<TodoListProps> = (props) => {
    const { items, onItemRemove, onItemCheck } = props
    return (
    <>
      {props.items.length > 0 && (
        <Paper style={{ marginTop: 16 }}>
          <List style={{ overflow: "scroll" }}>
            {props.items.map((todo, idx) => (
              <TodoListItem
                {...todo}
                key={`TodoItem.${idx}`}
                onButtonClick={() => onItemRemove(idx)}
                onCheckBoxToggle={() => onItemCheck(idx)}
              />
            ))}
          </List>
        </Paper>
      )}
    </>
  )};

export default TodoList;
