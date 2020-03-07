import jwt from "jsonwebtoken";
const JWT_TOKEN_NAME = "jwt-token";
const USER_ID_NAME = "userId";

export const isLoggedIn = () => {
  const token = localStorage.getItem(JWT_TOKEN_NAME); // !! => boolean

  if (!token) return false;

  const decodedToken = jwt.decode(token);
  const expirationTime = decodedToken.exp * 1000; // exp: second; Date.now(): millisecond
  const isExpired = Date.now() - expirationTime > 0; // now - past > 0 => expired

  return !isExpired;
};

// Token
export const storeToken = token => {
  localStorage.setItem(JWT_TOKEN_NAME, token);
};

export const getToken = () => {
  return localStorage.getItem(JWT_TOKEN_NAME);
};

export const removeToken = () => {
  return localStorage.removeItem(JWT_TOKEN_NAME);
};

// User id
export const storeUserId = userId => {
  localStorage.setItem(USER_ID_NAME, userId);
};

export const getUserId = () => {
  return localStorage.getItem(USER_ID_NAME);
};

export const removeUserId = () => {
  return localStorage.removeItem(USER_ID_NAME);
};
