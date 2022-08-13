import React, { useState } from 'react';
import FormWrapper from 'components/login-register-from-wrapper';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Button, Typography, useTheme, Link } from '@material-ui/core';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import Input from 'components/input';
import ReactHelmet from 'components/react-helmet';
import { useUserContext } from 'components/context-providers/user-context';
import Cookie from 'js-cookie';

import auth from 'api/fetcher/auth';

const LoginAsJobSeeker = () => {
  const { control, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const theme = useTheme();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const { setMe } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);

  const handleShowPassword = () => setShowPassword(prev => !prev);

  const handleLogin = async data => {
    try {
      setIsLoading(true);
      const formData = new FormData();

      for (const key in data) {
        formData.append(key, data[key]);
      }

      const response = await auth.login(formData);
      console.log('response :>> ', response);
      localStorage.setItem('access_token', response.access_token);
      setMe(response.username);
      setIsLoading(false);
      history.push('/');
    } catch (error) {
      setIsLoading(false);
      console.log('error login', error.response);

      if (error?.response)
        return enqueueSnackbar(error?.response?.data?.detail || 'Something went wrong', {
          variant: 'error',
        });
      enqueueSnackbar('login error!', { variant: 'error' });
    }
  };

  return (
    <>
      <ReactHelmet title="Login" />
      <FormWrapper title="Log in">
        <form onSubmit={handleSubmit(handleLogin)}>
          <Input
            label="Username"
            name="username"
            control={control}
            placeholder="Username"
            style={{ marginBottom: '1rem' }}
            rules={{ required: true }}
          />
          <Input
            label="Password"
            name="password"
            control={control}
            placeholder="password"
            style={{ marginBottom: '1.75rem' }}
            rules={{ required: true }}
            isPassword
            type={showPassword ? 'text' : 'password'}
            handleShowPassword={handleShowPassword}
          />
          <Button
            type="submit"
            fullWidth
            color="primary"
            variant="contained"
            style={{ marginBottom: theme.spacing(2) }}
            disabled={isLoading}
          >
            log in
          </Button>
        </form>
        <Typography variant="body2" color="textSecondary" align="center" gutterBottom>
          Need Account?&nbsp;
          <Link component={RouterLink} to="/register">
            Register now!
          </Link>
        </Typography>
      </FormWrapper>
    </>
  );
};

export default LoginAsJobSeeker;
