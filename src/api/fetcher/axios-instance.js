import axios from 'axios';
import apiRoutes from 'api/api-routes';

const apiFetcher = axios.create({
  baseURL: apiRoutes.root,
  withCredentials: true,
});

export default apiFetcher;
