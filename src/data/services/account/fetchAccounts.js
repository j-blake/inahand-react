export default async () => {
  const jwt = localStorage.getItem(process.env.REACT_APP_JWT_TOKEN);
  const options = {
    method: 'get',
    credentials: 'include',
  };
  if (jwt) {
    options.headers = { Authorization: `Bearer ${jwt}` };
  }
  return fetch(`${process.env.REACT_APP_API_URL}/accounts`, options);
};
