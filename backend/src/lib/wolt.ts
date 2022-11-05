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


export const getFee = async (from_address: string, to_address: string): Promise<DeliveryFee> => {
  const requestBody = {
    pickup: {
      formatted_address: from_address,
    },
    dropoff: {
      formatted_address: to_address,
    },
  };
  const response = await axios.post(`${BASE_URL}/merchants/${MERCHANT_ID}/delivery-fee`, requestBody, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
    },
  });
  return response.data as DeliveryFee;
}