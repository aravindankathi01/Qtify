import axios from "axios";

const QTIFY_BACKEND_POINT = "https://qtify-backend-labs.crio.do";

async function fetchApi(path) {
  try {
    const response = await axios.get(QTIFY_BACKEND_POINT + path);
    return response.data;
  } catch (error) {
    // console.error(error);
    console.log("API Failure");
  }
}

export default fetchApi;
