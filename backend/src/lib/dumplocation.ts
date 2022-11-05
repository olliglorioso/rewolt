const axios = require("axios");
const BASE_URL = "https://dump-location-uxsxrlriaa-lm.a.run.app";

interface DumpLocation {
  streetAddress: string;
  phoneNumber: string;
}

export const getDumpLocation = async (lat: number, lon: number, type: string): Promise<DumpLocation> => {
  const response = await axios.post(`${BASE_URL}`, {
    location: [lat, lon],
    type: type.toLowerCase()
  });
  return response.data;
}