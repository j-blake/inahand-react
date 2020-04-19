export default async () => fetch(`${process.env.REACT_APP_API_URL}/auth/check`, {
  method: 'get',
  credentials: 'include',
  headers: {
    Accept: 'application/json',
  },
});
