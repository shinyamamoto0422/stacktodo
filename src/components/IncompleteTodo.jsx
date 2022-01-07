import React from "react";
import { Box, Button, List } from '@mui/material';
import incCehck from '../assets/image/incCheck.svg';

export const IncompleteTodo = (props) => {
  const { todo, onClickComplete, onClickDelete } = props;
  return (
    <div>
        <p>Doing</p>
        <ul>
          {/* incTodosを順番に処理して中身は<Box></Box>を入れてあげる→map関数 */}
          {todo.map((todo, index) => {
            return (
              <Box key={todo} sx={{display: 'flex' , m: 1}}>
                <img onClick={ () => onClickComplete(index)} src={incCehck} alt="チェックボックス" />
                <List>{todo}</List>
                {/* 関数に引数を渡していくときは、アロー関数で新しく関数を生成する必要がある */}
                <Button onClick={ () => onClickDelete(index) } variant='contained' color='error'>削除</Button>
              </Box> 
            );
          })}
        </ul>
    </div>
  )
};