import axios from "axios";

const BASE_URL = 'https://daas-public-api.development.dev.woltapi.com';
const MERCHANT_ID = process.env.WOLT_MERCHANT_ID;
const API_KEY = process.env.WOLT_API_KEY;

interface DeliveryFee {
  time_estimate_minutes: number;
  fee: {
    amount: number;
    currency: string;
  },
  scheduled_dropoff_time: string;
}
interface Coordinates {
  lat: number;
  lon: number;
}

export const getFee = async (from: Coordinates, to: Coordinates): Promise<DeliveryFee> => {
  const requestBody = {
    pickup: {
      location: {
        coordinates: {
          lat: from.lat,
          lon: from.lon,
        }
      }
    },
    dropoff: {
      location: {
        coordinates: {
          lat: to.lat,
          lon: to.lon,
        }
      }
    },
  };
  const response = await axios.post(`${BASE_URL}/merchants/${MERCHANT_ID}/delivery-fee`, requestBody, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
    },
  });
  return response.data as DeliveryFee;
}


