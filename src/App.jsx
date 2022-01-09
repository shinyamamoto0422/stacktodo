import './App.css';
import { useState } from 'react';
import { Todo } from './Pages/Todo/Todo';

import { Button } from '@mui/material';

export const App = () => {
  const [ input, setInput ] = useState([]);
  const [ todoList, setTodoList ] = useState([]);
  const [ finishedList, setFinishedList ] = useState([]);

  const addTodo = () => {
    setTodoList([...todoList, input]);
    setInput('');
  }

  const deleteTodo = (index) => {
    setTodoList(todoList.filter((_,idx) => idx !== index))
  }

  const deleteFinishTodo = (index) => {
    setFinishedList(finishedList.filter((_, idx) => idx !== index))
  }

  const finishTodo = (index) => {
    deleteTodo(index);
    setFinishedList([...finishedList, todoList.find((_, idx) => idx === index)])
  }

  const reopenTodo = (index) => {
    deleteFinishTodo(index)
    setTodoList([...todoList, finishedList.find((_, idx) => idx === index)])
  }
  
  return (
    <>
      <input type="text"  onChange={(e) => setInput(e.target.value)} value={input}/>
      <Button variant='contained' size='small' onClick={() => addTodo()}>追加</Button>
      <div>
        <h1>未完了</h1>
        <Todo todoList={todoList} deleteTodo={deleteTodo} changeTodoStatus={finishTodo} type="todo"/>
      </div>
      <div>
        <h1>完了済み</h1>
        <Todo todoList={finishedList} deleteTodo={deleteFinishTodo} changeTodoStatus={reopenTodo} type="done"/>
      </div>
    </>
  );
};