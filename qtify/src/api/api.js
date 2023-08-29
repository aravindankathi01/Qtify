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

// https://qtify-backend-labs.crio.do/albums/top
// https://qtify-backend-labs.crio.do/albums/new
// https://qtify-backend-labs.crio.do/album/:slug
// https://qtify-backend-labs.crio.do/songs
// https://qtify-backend-labs.crio.do/faq
// https://qtify-backend-labs.crio.do/genres
