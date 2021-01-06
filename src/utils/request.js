import axios from 'axios';
import Cookie from 'js-cookie';
import queryString from 'query-string';

import Router from 'next/router';
import getConfig from 'next/config';

const { serverRuntimeConfig } = getConfig();

const createJWTTokenHeaders = (ctx) => {
  let token;
  if (ctx) {
    token = ctx.req.cookies.accessToken;
    if (!token) {
      throw 'token not found';
    }
  } else {
    token = Cookie.get('accessToken');
    if (!token) {
      throw 'token not found';
    }
  }

  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return headers;
};

const getURL = (ctx) => {
  if (ctx) {
    return serverRuntimeConfig.backendAPIHost;
  } else {
    return process.env.NEXT_PUBLIC_API_HOST || 'https://api.ramble-club.com';
  }
};

export const get = async (path, ctx) => {
  const headers = createJWTTokenHeaders(ctx);
  const res = await axios.get(`${getURL(ctx)}${path}`, { headers });
  return res.data;
};

export const post = async (path, body, ctx) => {
  const headers = createJWTTokenHeaders(ctx);
  const res = await axios.post(`${getURL(ctx)}${path}`, body, { headers });
  return res.data;
};
