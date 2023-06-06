import axios from "axios";
const baseUrl = "http://localhost:3001/api";

const getTraditional = () => {
  const request = axios.get(`${baseUrl}/traditional`);
  console.log("url", `${baseUrl}/traditional`);
  console.log("req, res", request);
  return request.then((response) => response.data);
};

const getDigital = () => {
  console.log("getDigital");
  const request = axios.get(`${baseUrl}/digital`);
  console.log("url", `${baseUrl}/digital`);
  console.log("request", request);

  return request.then((response) => response.data);
};

const getPhotography = () => {
  const request = axios.get(`${baseUrl}/photography`);
  return request.then((response) => response.data);
};

const uploadImage = async (imageObject: Object) => {
  try {
    console.log("imageObject", imageObject);
    const response = await axios.post(baseUrl, imageObject);
    return response.data;
  } catch (error) {
    return console.log("error", error);
  }
};

export default { getTraditional, getDigital, getPhotography, uploadImage };
