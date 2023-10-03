export const detectDarkMode = () => {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches 
    ? "dark" 
    : "light";
};

export default detectDarkMode;