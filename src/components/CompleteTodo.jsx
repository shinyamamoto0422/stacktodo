import React from "react";
import { Box, List } from '@mui/material';
import cCeckImage from '../assets/image/cCheck.svg';

export const CompleteTodo = (props) => {
  const { todo, onClick } = props;
  return (
    <div>
      <p>Done</p>
        <ul>
          {todo.map((todo, index) => {
            return (
              <Box key={todo} sx={{display: 'flex'}}>
                <img onClick={ () => onClick(index)} src={cCeckImage} alt="チェックボックス" />
                <List>{todo}</List>
              </Box>
            )
          })}
        </ul>
    </div>
  )
};