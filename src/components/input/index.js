import { TextField, InputAdornment, IconButton, Typography } from '@material-ui/core';
import { Controller } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Input = ({
  name,
  label,
  control,
  type,
  placeholder,
  handleShowPassword,
  style,
  rules,
  defaultValue = '',
  isPassword = false,
  disabled = false,
  multiline = false,
  minRows = 1,
}) => {
  return (
    <>
      <Typography gutterBottom>{label}</Typography>
      <Controller
        name={name}
        defaultValue={defaultValue}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
          <TextField
            // helperText={!!fieldState.error && 'error'}
            {...field}
            multiline={multiline}
            minRows={minRows}
            disabled={disabled}
            error={!!fieldState.error}
            style={{ ...style }}
            size='small'
            placeholder={placeholder}
            variant='outlined'
            fullWidth
            type={type}
            InputProps={
              isPassword
                ? {
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton onClick={handleShowPassword}>
                          {type === 'password' ? <AiFillEye /> : <AiFillEyeInvisible />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }
                : null
            }
          />
        )}
      />
    </>
  );
};

export default Input;
