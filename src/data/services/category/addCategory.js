export default async (data) => {
  const jwt = localStorage.getItem(process.env.REACT_APP_JWT_TOKEN);
  const options = {
    method: 'post',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  if (jwt) {
    options.headers.Authorization = `Bearer ${jwt}`;
  }
  return fetch(`${process.env.REACT_APP_API_URL}/category`, options);
};
