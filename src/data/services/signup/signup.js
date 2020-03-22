export default async (data) => {
  const {
    firstName,
    lastName,
    email,
    password,
  } = data;
  return fetch(`${process.env.REACT_APP_API_URL}/auth/create`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      email,
      password,
      firstName,
      lastName,
    }),
  });
};
