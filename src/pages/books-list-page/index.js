import React from 'react';
import PageTitle from 'components/page-title';
import { useHistory } from 'react-router-dom';

const BooksListPage = () => {
  const history = useHistory();

  return (
    <div>
      <PageTitle
        title="Create Book"
        buttonLabel="create new"
        onClick={() => history.push('/books/create')}
      />
      BooksListPage
    </div>
  );
};

export default BooksListPage;
