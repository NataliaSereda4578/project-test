import Router from 'next/router';

export const login = async ({ email, password }) => {
  // eslint-disable-next-line no-undef
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ORIGIN}api/user/login`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }
  );

  if (!response.ok) {
    throw new Error('Failed to login!');
  }
  Router.push('/');
};

export const register = async ({ email, password, fullname }) => {
  // eslint-disable-next-line no-undef
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ORIGIN}api/user/register`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        fullname,
      }),
    }
  );

  if (!response.ok) {
    throw new Error('Registration failed!');
  }

  login({ email, password });
  Router.push('/');
};

export const getUserInfo = async (token) => {
  if (!token) {
    throw new Error('No token!');
  }
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ORIGIN}api/user/me?${new URLSearchParams({
      token,
    })}`
  );

  if (!response.ok) {
    removeCookies('token');
    // response.clearCookie('token');
    throw new Error('Cant load user info!');
  }

  const userData = await response.json();
  return userData;
};

export const logout = () => {
  // eslint-disable-next-line no-undef
  fetch(`${process.env.NEXT_PUBLIC_ORIGIN}api/user/logout`);
  Router.push('/login');
};
