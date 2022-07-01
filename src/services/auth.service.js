import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

const register = (username, email, password) => {
    return axios.post(API_URL + "signup", {
        username,
        email,
        password,
    });
};

const login = async(username, password) => {
    console.debug("Login for ", username);
    localStorage.setItem("user", JSON.stringify({name: username, pwd: password}));//for test purpose

    // return axios
    //     .post(API_URL + "signin", {
    //         username,
    //         password,
    //     })
    //     .then((response) => {
    //         if (response.data.accessToken) {
    //             localStorage.setItem("user", JSON.stringify(response.data));
    //         }
    //
    //         return response.data;
    //     });
};

const logout = () => {
    console.debug("logout");
    localStorage.removeItem("user");
};

const getLoggedUser = () => {
    console.debug("current user in storage ", localStorage.getItem("user"));
    return JSON.parse(localStorage.getItem("user"));
};

const isAuthenticated = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        return true;
    } else {
        return true;
    }
};

const authHeader = () => {
    const user = getLoggedUser();

    if (user && user.accessToken) {
        return {Authorization: 'Bearer ' + user.accessToken}; // for Spring Boot back-end
        // return { 'x-access-token': user.accessToken };       // for Node.js Express back-end
    } else {
        return {};
    }
}

const AuthService = {
    register,
    login,
    logout,
    getLoggedUser: getLoggedUser,
    isAuthenticated,
    authHeader
};

export default AuthService;
