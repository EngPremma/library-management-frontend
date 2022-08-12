import React from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { Controller } from 'react-hook-form';
import { Typography } from '@material-ui/core';

const InputDate = ({ name, label, control, defaultValue, rules, disabled = false }) => {
  return (
    <>
      <Typography gutterBottom>{label}</Typography>
      <Controller
        defaultValue={defaultValue}
        name={name}
        control={control}
        rules={rules}
        render={props => (
          <KeyboardDatePicker
            disabled={disabled}
            fullWidth
            size='small'
            inputVariant='outlined'
            format='dd/MM/yyyy'
            value={props.field.value}
            onChange={e => props.field.onChange(e)}
          />
        )}
      />
    </>
  );
};

export default InputDate;
