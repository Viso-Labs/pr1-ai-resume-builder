import axios from "./HttpServices";
import ToasterMessage from "../helpers/ToasterMessage";
import Token from "./token/Token";

const resumeGenerate = async (data) => {
    const token = Token.getAccessToken();
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await axios.post("/api/generate-resume", data);
      if (response.status === 201 || response.status === 200) {
        return(response.data);
      } else {
        ToasterMessage.errorMessage({
            custom_message: 'Could not generate the resume!, try again!',
        });
        return(false);
      }
    } catch (error) {
      ToasterMessage.ErrorMessage({
        error: error,
      });
      return(false);
    }
  };

  export default {
    resumeGenerate
  };