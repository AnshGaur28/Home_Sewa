export const setauth = (token) => {
  const auth = token.slice(0, Math.floor(token.length / 2));
  const user = token.slice(Math.floor(token.length / 2), token.length);

  window.localStorage.setItem('auth-token', auth);
  window.localStorage.setItem('user_id', user);
  window.localStorage.setItem('token', token);
};

export const getauth = () => {
  const auth = window.localStorage.getItem('auth-token');
  const user = window.localStorage.getItem('user_id');
  const token = window.localStorage.getItem('token');
  if (auth && user) return [{ auth }, { user }, { token }];
  return null;
};

export const clearToken = () => {
  localStorage.setItem('auth-token', null);
  localStorage.setItem('user_id', null);
};
