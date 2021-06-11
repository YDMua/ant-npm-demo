export const setCookie = (key, value) => {
    document.cookie = `${key}=${value};`;
};
export const getCookie = (key) => {
    const items = document.cookie.split("; ");
    for (let i = 0; i < items.length; i += 1) {
        const item = items[i].split("=");
        if (key === item[0] && item.length === 2) {
            return decodeURIComponent(item[1]);
        }
    }
    return "";
};
console.log("111");
