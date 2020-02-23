export default async (categoryId) => {
  const jwt = localStorage.getItem(process.env.REACT_APP_JWT_TOKEN);
  const options = {
    method: 'delete',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  if (jwt) {
    options.headers.Authorization = `Bearer ${jwt}`;
  }
  return fetch(`${process.env.REACT_APP_API_URL}/category/${categoryId}`, options);
};
