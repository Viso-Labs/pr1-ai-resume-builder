import jwtDecode from "jwt-decode";

const setAccessToken = (value) => {
  localStorage.setItem("AccessToken", value);
};

const getAccessToken = () => {
  return localStorage.getItem("AccessToken");
};

const removeAccessToken = () => {
  localStorage.removeItem("AccessToken");
}

const getAuth = (token) => {

  try {
    const user = jwtDecode(token);
    return user;
  } catch (err) {
    return null;
  }
}

export default {
  getAuth,
  setAccessToken,
  getAccessToken,
  removeAccessToken
};
