import React from "react";
import { Box, Button } from "@material-ui/core";

export const Todo = (props) => {
  const { todoList, deleteTodo, changeTodoStatus, type } = props;
  return (
    <>
      {todoList.map((todo, idx) => (
        <Box key={todo}>
          {todo}
          <Button variant="contained" color="secondary" onClick={() => deleteTodo(idx)}>削除</Button>
          <Button variant="contained" onClick={() => changeTodoStatus(idx)}>{type === "todo" ? "完了": "戻す"}</Button>
        </Box>
      ))}
    </>
  )
}