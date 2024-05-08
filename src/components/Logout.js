const logout = () => {
    localStorage.removeItem('token');  // Remove the token from localStorage
    console.log('User logged out.');
    // Redirect to login page or update state to indicate the user is logged out
};
