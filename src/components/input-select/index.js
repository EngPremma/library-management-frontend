import React from 'react';
import { Select, MenuItem, Typography } from '@material-ui/core';
import { Controller } from 'react-hook-form';

const InputSelect = ({
  name,
  label,
  control,
  options,
  defaultValue = '',
  rules,
  disabled = false,
  ...other
}) => {
  return (
    <>
      <Typography gutterBottom>{label}</Typography>
      <Controller
        name={name}
        defaultValue={defaultValue}
        control={control}
        rules={rules}
        render={({ field }) => (
          <Select {...field} {...other} disabled={disabled} variant='outlined' fullWidth margin='dense'>
            {options.map((item, index) => (
              <MenuItem key={index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </>
  );
};

export default InputSelect;
