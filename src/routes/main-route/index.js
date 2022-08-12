import HomePage from 'pages/home-page';
// register pages
import RegisterAsJobSeeker from 'pages/register-page/job-seeker';
import RegisterAsEmployer from 'pages/register-page/employer';
// login pages
import LoginAsJobSeeker from 'pages/login-page/job-seeker';
import LoginAsEmployer from 'pages/login-page/employer';
// job detail
import JobDetailPage from 'pages/job-detail/job-detail-homepage';

const routes = [
  {
    exact: true,
    path: '/',
    component: HomePage,
  },
  {
    exact: false,
    path: '/login/job-seeker',
    component: LoginAsJobSeeker,
  },
  {
    exact: false,
    path: '/login/employer',
    component: LoginAsEmployer,
  },
  {
    exact: false,
    path: '/register/employer',
    component: RegisterAsEmployer,
  },
  {
    exact: false,
    path: '/register/job-seeker',
    component: RegisterAsJobSeeker,
  },
  {
    exact: false,
    path: '/job/detail/:id?',
    component: JobDetailPage,
  },
];

export default routes;
