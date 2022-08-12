import React from 'react';
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import { BsSearch } from 'react-icons/bs';

const SearchInput = ({ value, defaultValue = '', placeholder, onChange, handleSearch }) => {
  return (
    <>
      <TextField
        value={value}
        defaultValue={defaultValue}
        variant='outlined'
        fullWidth
        size='small'
        placeholder={placeholder}
        onChange={onChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton size='small' onClick={handleSearch}>
                <BsSearch />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default SearchInput;
