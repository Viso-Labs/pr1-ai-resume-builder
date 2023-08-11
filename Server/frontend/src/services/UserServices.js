import axios from "./HttpServices";
import ToasterMessage from "../helpers/ToasterMessage";
import Token from "./token/Token";

const userUpgrade = async (data) => {
    const token = Token.getAccessToken();
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await axios.post("/api/upgrade-plan", data);
      if (response.status === 201 || response.status === 200) {
        return(response.data);
      } else {
        ToasterMessage.errorMessage({
            custom_message: 'Could not upgrade the plan!, try again!',
        });
        return(false);
      }
    } catch (error) {
      return(false);
    }
  };

  export default {
    userUpgrade
  };