import api from '../api';

export default async (data) => {
  const {
    firstName,
    lastName,
    email,
    password,
  } = data;
  return api.post('/auth/create', JSON.stringify({
    email,
    password,
    firstName,
    lastName,
  }));
};
