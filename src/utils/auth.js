const JWT_TOKEN_NAME = "jwt-token";

export const isLoggedIn = () => {
  return !!localStorage.getItem(JWT_TOKEN_NAME); // !! => boolean
};

export const storeToken = token => {
  localStorage.setItem(JWT_TOKEN_NAME, token);
};
