import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7796cb',
      light: '#edf1f8',
    },
    secondary: {
      main: '#c9cad9',
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        // boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      },
    },
    MuiPaper: {
      elevation1: {
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
      },
    },
  },
});

export default theme;
