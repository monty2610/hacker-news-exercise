export const getItem = (key) => {
  if (typeof window !== 'undefined') {
    const item = window.sessionStorage.getItem(key);
    return item ? JSON.parse(item) : {};
  }
  return {};
};

export const setItem = (key, value) => {
  if (typeof window !== 'undefined') {
    const stringifiedValue = JSON.stringify(value);
    window.sessionStorage.setItem(key, stringifiedValue);
  }
};
