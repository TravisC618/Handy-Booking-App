export const lengthCheck = (length, min, max) => {
  if (length < min || length > max) {
    return false;
  }
  return true;
};

export const getPreviousPath = currentPath => {
  const loginIndex = currentPath.indexOf("/login");
  return currentPath.substr(0, loginIndex);
};

export const isIncluded = (container, str) =>
  container.search(str) === -1 ? false : true;

export const setError = (name, specified = "") => {
  return { name, msg: `Invalid ${name}. ${specified}` };
};
