import React, { useState } from 'react';
import { Box, Button, Grid } from '@material-ui/core';
import PageTitle from 'components/page-title';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { useSnackbar } from 'notistack';
import Input from 'components/input';

const CreateBookPage = () => {
  const history = useHistory();
  const { control, handleSubmit } = useForm();
  const { enqueueSnackbar } = useSnackbar();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async data => {
    try {
      setIsLoading(true);

      await axios.post('/books', data);

      enqueueSnackbar('Create Book Successfully', { variant: 'success' });
      setIsLoading(false);
      history.push('/books');
    } catch (error) {
      setIsLoading(false);
      console.log('error create book :>> ', error);
      enqueueSnackbar(error.response.detail || 'Something went wrong', { variant: 'error' });
    }
  };

  return (
    <Box>
      <PageTitle title="Create Book" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Input
              label="Title"
              name="title"
              control={control}
              placeholder="Title"
              rules={{ required: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              label="ISBN"
              name="isbn"
              control={control}
              placeholder="ISBN"
              rules={{ required: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              label="Author"
              name="author"
              control={control}
              placeholder="Author"
              rules={{ required: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              label="Category"
              name="category"
              control={control}
              placeholder="Category"
              rules={{ required: true }}
            />
          </Grid>
          <Grid item xs={1}>
            <Button
              variant="outlined"
              color="default"
              onClick={() => {
                history.goBack();
              }}
            >
              Back
            </Button>
          </Grid>
          <Grid item xs={1}>
            <Button
              disabled={isLoading}
              variant="contained"
              color="primary"
              type="submit"
              disableElevation
            >
              Create
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default CreateBookPage;
