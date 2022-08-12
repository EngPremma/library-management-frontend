import React, { useState, useEffect } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import company from 'api/fetcher/company';
import profile from 'api/fetcher/profile';
import Input from 'components/input';
import useSnackbarHook from 'hooks/useSnackbar';
import Spacer from 'components/spacer';

const CompanyInfoPage = () => {
  const { control, reset, handleSubmit } = useForm();
  const { successSnackbar, errorSnackbar } = useSnackbarHook();

  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const fetchCompanyInfo = async () => {
    try {
      setIsFetching(true);
      const response = await profile.getProfileInfo();

      reset({
        name: response.user.company.name,
        address: response.user.company.address || '',
        description: response.user.company.companyDescription || '',
      });
    } catch (error) {
      console.log(error);
      errorSnackbar(error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchCompanyInfo();
  }, []);

  const onSubmit = async data => {
    console.log('data :>> ', data);
    try {
      setIsLoading(true);
      const response = await company.updateCompanyInfo(data);
      successSnackbar(response);
    } catch (error) {
      console.log(error);
      errorSnackbar(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Typography variant='h4' paragraph>
        My Company
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Input
              disabled={isLoading}
              label='Name'
              name='name'
              control={control}
              placeholder='Name'
              rules={{ required: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              disabled={isLoading}
              label='Address'
              name='address'
              control={control}
              placeholder='Address'
              rules={{ required: true }}
              multiline={true}
              minRows={3}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              disabled={isLoading}
              label='Description'
              name='description'
              control={control}
              placeholder='Company description'
              multiline={true}
              minRows={6}
            />
          </Grid>
        </Grid>
        <Spacer margin='2rem' />
        <Button
          variant='contained'
          type='submit'
          disableElevation
          color='primary'
          disabled={isLoading || isFetching}
        >
          {isLoading ? 'Saving...' : 'Save change'}
        </Button>
      </form>
    </>
  );
};

export default CompanyInfoPage;
