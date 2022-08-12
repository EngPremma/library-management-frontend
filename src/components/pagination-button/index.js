import React from 'react';
import { Pagination } from '@material-ui/lab';

const PaginationButton = ({ totalPages, page, handleChange }) => {
  return (
    <div>
      <Pagination color='secondary' count={totalPages} page={page} onChange={handleChange} size='small' />
    </div>
  );
};

export default PaginationButton;
