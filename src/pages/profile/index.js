import React, { useState, useEffect } from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import profile from 'api/fetcher/profile';
import Input from 'components/input';
import InputSelect from 'components/input-select';
import InputDate from 'components/input-date';
import useSnackbarHook from 'hooks/useSnackbar';
import gender from 'utils/gender';
import getCurrentDate from 'utils/get-current-date';
import Spacer from 'components/spacer';

const Profile = () => {
  const { control, reset, handleSubmit } = useForm();
  const { successSnackbar, errorSnackbar } = useSnackbarHook();

  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const fetchProfile = async () => {
    try {
      setIsFetching(true);
      const response = await profile.getProfileInfo();

      reset({
        firstname: response.user.firstname,
        lastname: response.user.lastname,
        email: response.user.email,
        phoneNumber: response.user.phoneNumber || '',
        gender: response.user.gender || gender[0].value,
        dob: response.user.dob || getCurrentDate(),
      });
    } catch (error) {
      console.log(error);
      errorSnackbar(error);
    } finally {
      setIsFetching(false);
    }
  };

  const onSubmit = async data => {
    try {
      setIsLoading(true);
      const response = await profile.updateProfileInfo(data);
      successSnackbar(response);
    } catch (error) {
      console.log(error);
      errorSnackbar(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <>
      <Typography variant='h4' paragraph>
        My Profile
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Input
              disabled={isLoading}
              label='Firstname'
              name='firstname'
              control={control}
              placeholder='Firstname'
              rules={{ required: true }}
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              disabled={isLoading}
              label='Lastname'
              name='lastname'
              control={control}
              placeholder='Lastname'
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              disabled={isLoading}
              label='Email'
              name='email'
              control={control}
              placeholder='Email'
              rules={{ required: true }}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              disabled={isLoading}
              label='Phone'
              name='phoneNumber'
              control={control}
              placeholder='Phone'
            />
          </Grid>
          <Grid item xs={6}>
            <InputSelect
              disabled={isLoading}
              name='gender'
              label='Gender'
              control={control}
              rules={{ required: true }}
              options={gender}
            />
          </Grid>
          <Grid item xs={6}>
            <InputDate
              name='dob'
              label='Date of birth'
              disabled={isLoading}
              control={control}
              rules={{ required: true }}
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

export default Profile;
