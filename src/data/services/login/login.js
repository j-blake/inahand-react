export default async (data) => {
  const { email, password } = data;
  return fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  });
};
