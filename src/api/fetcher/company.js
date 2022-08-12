import apiFetcher from 'api/fetcher/axios-instance';
import apiRoutes from 'api/api-routes';

const company = {
  updateCompanyInfo: async data => {
    const { data: response } = await apiFetcher.post(apiRoutes.updateCompanyInfo, data);
    return response;
  },
};

export default company;
