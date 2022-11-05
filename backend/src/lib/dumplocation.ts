const axios = require("axios");
const BASE_URL = "https://dump-location-uxsxrlriaa-lm.a.run.app";



const getDumpLocation = async (lat: string, lon: string, type: string) => {
  const response = await axios.post(`${BASE_URL}`, {
    location: [lat, lon],
    type
  });
  return response.data;
}