import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://test-api.loot-box.co/api/',
});
instance.interceptors.request.use(
  async (config) => {
    const token = null;
    config.headers.Accept = 'application/json';
    config.headers['X-Localization'] = 'en';
    config.headers['Content-Type'] = 'application/json';

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);
export default instance;
