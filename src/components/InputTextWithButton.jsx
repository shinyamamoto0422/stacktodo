import React from "react";
import { Button, TextField } from '@mui/material';

export const InputTextWithButton = (props) => {
  const { todoText, onChange, onClick, label, InputButtonText, disabled} = props;
  return (
    <div>
        <TextField
          id='outlined-basic' 
          label={label} 
          variant='outlined' 
          value={todoText} 
          onChange={onChange}
          disabled={disabled}
        >
        </TextField>

        {/* 追加ボタンを押したときにstateに保持されているか確認 */}
        <Button
          disabled={disabled}
          onClick={onClick} 
          variant='outlined' 
          color='secondary'
          >
            {InputButtonText}
          </Button>
      </div>
  )
};