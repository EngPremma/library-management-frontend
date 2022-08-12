const apiRoutes = {
  root: process.env.REACT_APP_NODE_API,

  getProfileInfo: '/api/auth/get-me',
  updateProfileInfo: '/api/profile/profile-info',

  updateCompanyInfo: '/api/company/update',

  createJob: '/api/job/create',
  updateJob: '/api/job/update',
  getJobsOwnByEmployer: '/api/job/employer/jobs',
  getJobDetail: '/api/job/detail',
  getAllJobs: '/api/job',
};

export default apiRoutes;
