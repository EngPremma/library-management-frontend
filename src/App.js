import { ThemeProvider, Slide } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import axios from 'axios';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import theme from 'theme';

import UserContextProvider from 'components/context-providers/user-context';
//routes
import publicRoutes from 'routes/main-route';
import { privateRoutes } from 'routes/private-routes';
// layouts
import MainLayout from 'layouts/main-layout';
// import DashboardLayout from 'layouts/dashboard-layout';
// components
import PrivateRoute from 'components/private-route';

const App = () => {
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = process.env.REACT_APP_NODE_API;

  axios.interceptors.request.use(
    request => {
      request.headers['Authorization'] = `bearer ${localStorage.getItem('access_token')}`;

      return request;
    },
    error => {
      return Promise.reject(error);
    }
  );

  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      TransitionComponent={Slide}
      autoHideDuration={3000}
    >
      <ThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Router>
            <UserContextProvider>
              <Switch>
                {publicRoutes.map(route => (
                  <Route key={route.path} {...route} />
                ))}
                {/* <DashboardLayout> */}
                <MainLayout>
                  {privateRoutes.map(route => (
                    <PrivateRoute key={route.path} {...route} />
                  ))}
                </MainLayout>
                {/* </DashboardLayout> */}
              </Switch>
            </UserContextProvider>
          </Router>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </SnackbarProvider>
  );
};

export default App;
