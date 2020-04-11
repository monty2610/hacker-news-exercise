export const getItem = key => {
    if(typeof window !== 'undefined') {
        const item = window.localStorage.getItem(key);
        return JSON.parse(item);
    }
    return {};
}

export const setItem = (key, value) => {
    if(typeof window !== 'undefined') {
        const stringifiedValue = JSON.stringify(value);
        window.localStorage.setItem(key, stringifiedValue);
    }
}