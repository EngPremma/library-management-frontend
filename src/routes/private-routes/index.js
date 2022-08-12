import Profile from 'pages/profile';
import HistoryPage from 'pages/history';
import CompanyInfoPage from 'pages/company-info';
import DashboardJobsPage from 'pages/dashboard-jobs-list';
import CreateJobPage from 'pages/create-job';
import JobDetailPage from 'pages/job-detail';
// import { roles } from 'constants/role';

export const privateRoutes = [
  {
    exact: false,
    path: '/dashboard/my-profile',
    component: Profile,
    role: 'job-seeker',
  },
  // {
  //   exact: false,
  //   path: '/dashboard/history',
  //   component: HistoryPage,
  // },
  {
    exact: false,
    path: '/dashboard/company-info',
    component: CompanyInfoPage,
  },
  {
    exact: false,
    path: '/dashboard/job/my-list',
    component: DashboardJobsPage,
  },
  {
    exact: false,
    path: '/dashboard/job/create',
    component: CreateJobPage,
  },
  {
    exact: false,
    path: '/dashboard/job/edit/:id?',
    component: CreateJobPage,
  },
  {
    exact: false,
    path: '/dashboard/job/detail/:id/employer/:employerId?',
    component: JobDetailPage,
  },
];

export const tabs = [
  {
    path: '/dashboard/my-profile',
    title: 'profile',
  },
  // {
  //   path: '/dashboard/history',
  //   title: 'history',
  // },
  {
    path: '/dashboard/company-info',
    title: 'company',
  },
  {
    path: '/dashboard/job/my-list',
    title: 'Jobs',
  },
  {
    path: '/dashboard/job/create',
    title: 'Create/Edit Job',
  },
];
