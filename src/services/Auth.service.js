import { axios } from "../axios/axios";

const register = (username, email, password,fullName,phoneNumber) => {
  return axios.post("/user/signup", {
    username,
    email,
    password,
    fullName,
    phoneNumber
  });
};

const login = (username, password) => {
  return axios
    .post("/user/signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;