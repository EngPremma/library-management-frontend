import apiFetcher from 'api/fetcher/axios-instance';
import apiRoutes from 'api/api-routes';

const job = {
  createJob: async data => {
    const { data: response } = await apiFetcher.post(apiRoutes.createJob, data);
    return response;
  },

  updateJob: async data => {
    const { data: response } = await apiFetcher.put(apiRoutes.updateJob, data);
    return response;
  },

  getJobsOwnByEmployer: async ({ page, limit }) => {
    const { data: response } = await apiFetcher.get(
      `${apiRoutes.getJobsOwnByEmployer}?page=${page}&limit=${limit}`
    );
    return response;
  },

  getJobDetail: async ({ id }) => {
    const { data: response } = await apiFetcher.get(`${apiRoutes.getJobDetail}/${id}`);
    return response;
  },

  getAllJobs: async ({ query }) => {
    const { data: response } = await apiFetcher.get(`${apiRoutes.getAllJobs}${query}`);
    return response;
  },
};

export default job;
