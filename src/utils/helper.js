export const lengthCheck = (length, min, max) => {
  if (length < min || length > max) {
    return false;
  }
  return true;
};

export const setError = (name, specified = "") => {
  return { name, msg: `Invalid ${name}. ${specified}` };
};
