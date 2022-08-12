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
import DashboardLayout from 'layouts/dashboard-layout';
// components
import PrivateRoute from 'components/private-route';

const App = () => {
  axios.defaults.withCredentials = true;

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
              <MainLayout>
                <Switch>
                  {publicRoutes.map(route => (
                    <Route key={route.path} {...route} />
                  ))}
                  <DashboardLayout>
                    {privateRoutes.map(route => (
                      <PrivateRoute key={route.path} {...route} />
                    ))}
                  </DashboardLayout>
                </Switch>
              </MainLayout>
            </UserContextProvider>
          </Router>
        </MuiPickersUtilsProvider>
      </ThemeProvider>
    </SnackbarProvider>
  );
};

export default App;
