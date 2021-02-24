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

const socialUrl = 'http://localhost:5100';

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

export const Delete = async (path, body, ctx) => {
  const headers = createJWTTokenHeaders(ctx);
  const res = await axios.delete(`${getURL(ctx)}${path}`, { headers });
  return res.data;
};

export const everyPost = async (path, body, ctx) => {
  const res = await axios.post(`${getURL(ctx)}${path}`, body);
  return res.data;
};

export const getSocial = async (path, ctx) => {
  const headers = createJWTTokenHeaders(ctx);
  const res = await axios.get(`${socialUrl}${path}`, { headers });
  return res.data;
};

export const postSocial = async (path, body, ctx) => {
  const headers = createJWTTokenHeaders(ctx);
  const res = await axios.post(`${socialUrl}${path}`, body, { headers });
  return res.data;
};

export const deleteSocial = async (path, body, ctx) => {
  const headers = createJWTTokenHeaders(ctx);
  const res = await axios.delete(`${socialUrl}${path}`, { headers });
  return res.data;
};
