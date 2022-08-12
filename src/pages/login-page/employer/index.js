import React, { useState } from 'react';
import FormWrapper from 'components/login-register-from-wrapper';
import { useForm } from 'react-hook-form';
import { Button, Typography, useTheme, Link } from '@material-ui/core';
import axios from 'axios';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Input from 'components/input';
import ReactHelmet from 'components/react-helmet';
import { useUserContext } from 'components/context-providers/user-context';

const LoginAsEmployer = () => {
  const { control, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();

  const { setMe } = useUserContext();

  const [isLoading, setIsLoading] = useState(false);

  const handleShowPassword = () => setShowPassword(prev => !prev);

  const handleLogin = async data => {
    try {
      setIsLoading(true);

      const { data: response } = await axios.post(`${process.env.REACT_APP_NODE_API}/api/auth/login`, data);

      enqueueSnackbar(response.message, { variant: 'success' });
      setMe(response.user); // set data from response to userContext
      setIsLoading(false);
      history.push('/dashboard/my-profile');
    } catch (error) {
      setIsLoading(false);
      console.log(error.response);
      if (error?.response) return enqueueSnackbar(error?.response?.data?.message, { variant: 'error' });
      enqueueSnackbar('login error!', { variant: 'error' });
    }
  };

  return (
    <>
      <ReactHelmet title='Job Finding: Employer login' />
      <FormWrapper title='Log in as Employer'>
        <form onSubmit={handleSubmit(handleLogin)}>
          <Input
            label='Email'
            name='email'
            control={control}
            placeholder='Email'
            style={{ marginBottom: '1rem' }}
            rules={{ required: true }}
          />
          <Input
            label='Password'
            name='password'
            control={control}
            placeholder='password'
            style={{ marginBottom: '1.75rem' }}
            rules={{ required: true }}
            isPassword
            type={showPassword ? 'text' : 'password'}
            handleShowPassword={handleShowPassword}
          />
          <Button
            type='submit'
            fullWidth
            color='primary'
            variant='contained'
            style={{ marginBottom: theme.spacing(2) }}
            disabled={isLoading}
          >
            log in
          </Button>
        </form>
        <Typography variant='body2' color='textSecondary' align='center' gutterBottom>
          Need Account?&nbsp;
          <Link component={RouterLink} to='/register/employer'>
            Register now!
          </Link>
        </Typography>
      </FormWrapper>
    </>
  );
};

export default LoginAsEmployer;
