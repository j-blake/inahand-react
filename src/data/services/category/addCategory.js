export default async (data) => {
  const options = {
    method: 'post',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
  return fetch(`${process.env.REACT_APP_API_URL}/category`, options);
};
