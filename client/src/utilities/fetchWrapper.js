import axios from "axios";

const fetch = async (requestInfo) => {
  try {
    const { URL, method, POSTDATA } = requestInfo;
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await axios({
      method,
      url: URL,
      data: POSTDATA || {},
      headers,
    });

    if (response.status === 200) {
      return response;
    } else {
      throw new Error(`Invalid response from the server: ${response.status}`);
    }
  } catch (err) {
    throw err;
  }
};

export default fetch;
