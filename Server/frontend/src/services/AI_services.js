import axios from "./HttpServices";
import ToasterMessage from "../helpers/ToasterMessage";
import Token from "./token/Token";

const getBulletPoints = async (data) => {
    const token = Token.getAccessToken();
    const user = Token.getAuth(token);

    if(user.role === "PREMIUM_USER"){
      try {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await axios.post("/api/getBulletPoints", data);
        if (response.status === 200 || response.status === 202) {
          return(response.data?.bulletPoints);
        } else {
          ToasterMessage.errorMessage({
              custom_message: 'Could not create bullet points, try again!',
          });
          return(false);
        }
      } catch (error) {
        return(false);
      }
    }else{
      return data?.description
    }

  };


  export default {
    getBulletPoints,
  };