import api from '../api';

export default async (data) => api.post('/account', JSON.stringify(data));
