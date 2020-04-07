export default async (categoryId) => {
  const options = {
    method: 'delete',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(`${process.env.REACT_APP_API_URL}/category/${categoryId}`, options);
};
