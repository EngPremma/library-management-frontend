import React, { useState } from 'react';
import FormWrapper from 'components/login-register-from-wrapper';
import { useForm } from 'react-hook-form';
import { Button } from '@material-ui/core';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { useHistory } from 'react-router-dom';
import Input from 'components/input';
import ReactHelmet from 'components/react-helmet';
import GoToLoginPage from '../components/go-to-login-page';
import Spacer from 'components/spacer';

const RegisterAsEmployer = () => {
  const { control, handleSubmit, watch } = useForm();
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const watchPassword = watch('password');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async data => {
    setIsLoading(true);
    try {
      const { data: response } = await axios.post(
        `${process.env.REACT_APP_NODE_API}/api/register/employer`,
        { ...data, role: 'employer' },
        { withCredentials: true }
      );

      enqueueSnackbar(response.message, { variant: 'success' });
      setIsLoading(false);
      history.push('/employer/login');
    } catch (error) {
      setIsLoading(false);
      console.log(error.response);
      enqueueSnackbar(error?.response?.data?.message, { variant: 'error' });
    }
  };

  const handleShowPassword = () => setShowPassword(prev => !prev);
  const handleShowConfirmPassword = () => setShowConfirmPassword(prev => !prev);

  return (
    <>
      <ReactHelmet title='Job Finding: Employer registration' />
      <FormWrapper title='Register as Job Seeker'>
        <form onSubmit={handleSubmit(handleRegister)}>
          <Input
            label='First Name'
            name='firstname'
            control={control}
            placeholder='First Name'
            style={{ marginBottom: '1rem' }}
            rules={{ required: true }}
          />
          <Input
            label='Last Name'
            name='lastname'
            control={control}
            placeholder='Last Name'
            style={{ marginBottom: '1rem' }}
            rules={{ required: true }}
          />
          <Input
            label='Email'
            name='email'
            control={control}
            placeholder='Email'
            style={{ marginBottom: '1rem' }}
            rules={{ required: true }}
          />
          <Input
            label='Company Name'
            name='company'
            control={control}
            placeholder='Company Name'
            style={{ marginBottom: '1rem' }}
            rules={{ required: true }}
          />
          <Input
            label='Password'
            name='password'
            control={control}
            placeholder='password'
            style={{ marginBottom: '1rem' }}
            rules={{ required: true }}
            isPassword
            type={showPassword ? 'text' : 'password'}
            handleShowPassword={handleShowPassword}
          />
          <Input
            label='Confirm Password'
            name='confirmPassword'
            control={control}
            placeholder='confirmPassword'
            style={{ marginBottom: '1.75rem' }}
            rules={{ required: true, validate: value => value === watchPassword }}
            isPassword
            type={showConfirmPassword ? 'text' : 'password'}
            handleShowPassword={handleShowConfirmPassword}
          />
          <Button type='submit' fullWidth color='primary' variant='contained' disabled={isLoading}>
            register
          </Button>
        </form>
        <Spacer />
        <GoToLoginPage navigateTo='/login/employer' />
      </FormWrapper>
    </>
  );
};

export default RegisterAsEmployer;
