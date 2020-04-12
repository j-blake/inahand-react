export default async () => {
  const options = {
    method: 'get',
    credentials: 'include',
  };
  return fetch(`${process.env.REACT_APP_API_URL}/categories`, options);
};
