import jwtDecode from 'jwt-decode';

// Function to check if the token has expired
export const isTokenExpired = (token) => {
    try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() / 1000; // convert to seconds
        return decoded.exp < currentTime;
    } catch (error) {
        console.error('Failed to decode token:', error);
        return false;
    }
};

// Function to get the token from localStorage
export const getToken = () => {
    return localStorage.getItem('token');
};

// Function to set the token in localStorage
export const setToken = (token) => {
    localStorage.setItem('token', token);
};

// Function to remove the token from localStorage
export const removeToken = () => {
    localStorage.removeItem('token');
};
