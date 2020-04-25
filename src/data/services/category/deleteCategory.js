import api from '../api';

export default async (categoryId) => api.delete(`/category/${categoryId}`);
