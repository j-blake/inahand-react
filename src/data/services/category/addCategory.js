import api from '../api';

export default async (data) => api.post('/category', JSON.stringify(data));
