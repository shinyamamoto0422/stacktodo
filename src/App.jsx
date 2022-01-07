import './App.css';
import { useState } from 'react';

import { InputTextWithButton } from './components/InputTextWithButton';
import { IncompleteTodo } from './components/IncompleteTodo';
import { CompleteTodo } from './components/CompleteTodo';

export const App = () => {
  const [ todoText, setTodoText ] = useState('');

  const [ incTodos, setIncTodos ] = useState([]);

  const [ cTodos, setCTodos ] = useState([]);

  const onChangeText = (e) => setTodoText(e.target.value);

  const onClickAdd = () => {
    if (todoText === '') return;
    const newTodos = [...incTodos, todoText];
    setIncTodos(newTodos);
    setTodoText('');
  };

  const onClickDelete = (index) => {
    const newTodos = [...incTodos];
    newTodos.splice(index, 1);
    setIncTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newInCTodos = [...incTodos];
    newInCTodos.splice(index, 1);
    const newCTodos = [...cTodos, incTodos[index]];
    setIncTodos(newInCTodos);
    setCTodos(newCTodos);
  };

  const onClickBack = (index) => {
    const newCTodos = [...cTodos];
    newCTodos.splice(index, 1);
    const newInCTodos = [...incTodos, cTodos[index]];
    setCTodos(newCTodos);
    setIncTodos(newInCTodos);
  };

  return ( 
    <>
      <InputTextWithButton
        disabled={incTodos.length >= 5 }
        todoText={todoText} 
        onChange={onChangeText} 
        onClick={onClickAdd} 
        label={"TODOを追加"}
        InputButtonText={"追加"}
      />
      {incTodos.length >= 5 && 
      <p style={{ color: "red" }}>登録限度を超えました。タスクをこなしましょう!
      </p>
      }
      
      <IncompleteTodo  
        todo={incTodos} 
        onClickComplete={onClickComplete} 
        onClickDelete={onClickDelete} 
      />

      <CompleteTodo 
        todo={cTodos} 
        onClick={onClickBack} 
      />

    </>
  );
};