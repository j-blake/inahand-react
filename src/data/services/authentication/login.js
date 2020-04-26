import api from '../api';

export default async (data) => {
  const { email, password } = data;
  return api.post('/auth/login', JSON.stringify({ email, password }));
};
