import Token from "./token/Token";
import ToasterMessage from "../helpers/ToasterMessage";
import axios from "./HttpServices";

const login = async (data) => {
  try {
    const response = await axios.post("/auth/login", data);
    if(response.status === 200 || response.status === 202){
      const token = response.data.token;
      const user = Token.getAuth(token);
      Token.setAccessToken(token);
      const role = user.role;
      const res = {user:user, role:role};
      ToasterMessage.SuccessMessage({
        message: "Login success",
      });
      return res
    }
  } catch (error) {
    ToasterMessage.ErrorMessage({
      custom_message: error.response.data.message,
    });
    throw error;
  }
};

const signUp = async (data) => {
  try {
    const response = await axios.post("/auth/signup", data);
    if(response.status === 200 || response.status === 202){
      ToasterMessage.SuccessMessage({
        message: "User registered successfully",
      });
      return true
    }
  } catch (error) {
    ToasterMessage.ErrorMessage({
      error: error,
    });
    throw error;
  }
};

const logout = async () => {
  const data = {logout: ''};
  const token = Token.getAccessToken();
  try {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    const response = await axios.post("/api/logout", data);
    if(response.status === 200 || response.status === 202){
      Token.removeAccessToken();
      window.location.href = '/'
      return response.data;
    }
  } catch (error) {
    ToasterMessage.ErrorMessage({
      custom_message: "Logout failed!",
    });
  }
};

export default {
  login,
  logout,
  signUp,
};
