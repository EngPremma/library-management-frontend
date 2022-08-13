import axios from 'api/fetcher/axios-instance';

const auth = {
  login: async data => {
    const { data: response } = await axios.post('/users/auth/login', data);
    return response;
  },
};

export default auth;
