import apiFetcher from 'api/fetcher/axios-instance';
import apiRoutes from 'api/api-routes';

const profile = {
  getProfileInfo: async () => {
    const { data: response } = await apiFetcher.get(apiRoutes.getProfileInfo);
    return response;
  },
  updateProfileInfo: async data => {
    const { data: response } = await apiFetcher.post(apiRoutes.updateProfileInfo, data);
    return response;
  },
};

export default profile;
