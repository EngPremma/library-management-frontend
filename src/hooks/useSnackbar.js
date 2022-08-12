import { useSnackbar } from 'notistack';

const useSnackbarHook = () => {
  const { enqueueSnackbar } = useSnackbar();

  const successSnackbar = response => {
    return enqueueSnackbar(`${response?.message}`, { variant: 'success' });
  };

  const errorSnackbar = error => {
    return enqueueSnackbar(`${error?.response?.data?.message}`, { variant: 'error' });
  };

  return { successSnackbar, errorSnackbar };
};

export default useSnackbarHook;
