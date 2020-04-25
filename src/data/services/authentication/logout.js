export default async () => {
  const options = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  };
  return fetch(`${process.env.REACT_APP_API_URL}/auth/logout`, options);
};
