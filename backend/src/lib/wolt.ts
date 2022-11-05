const axios = require('axios');
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

export const getFee = async (from: string, to: string): Promise<DeliveryFee> => {
  const requestBody = {
    pickup: {
      location: {
        formatted_address: from,
      }
    },
    dropoff: {
      location: {
        formatted_address: to,
      }
    }
  };
  const response = await axios.post(`${BASE_URL}/merchants/${MERCHANT_ID}/delivery-fee`, requestBody, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
    },
  });
  return response.data as DeliveryFee;
}

interface ContactDetails {
  name: string;
  phone: string;
}
export const createDelivery = async (from: string, to: string,
  comment: string,
  pickupContact: ContactDetails, dropoffContact: ContactDetails,
  title: string, category: string,
  orderId: string,
  ): Promise<void> => {
 const body = {
  "pickup": {
    "location": {
      "formatted_address": from,
    },
    comment,
    "contact_details": {
      name: dropoffContact.name,
      phone_number: dropoffContact.phone,
      "send_tracking_link_sms": false
    }
  },
  "dropoff": {
    "location": {
      "formatted_address": to
    },
    "contact_details": {
      name: pickupContact.name,
      phone_number: pickupContact.phone,
      "send_tracking_link_sms": false
    },
    "comment": "Leave at the door, please"
  },
  "customer_support": {
    "email": "test@mail.com",
    "phone_number": "testPhone",
    "url": "webSite"
  },
  "merchant_order_reference_id": orderId,
  "is_no_contact": true,
  "contents": [
    {
      "count": 1,
      "description": title,
      "identifier": category,
      "tags": []
    }
  ],
  "tips": [],
  "min_preparation_time_minutes": 0,
  "scheduled_dropoff_time": null
}
  const response = await axios.post(`${BASE_URL}/merchants/${MERCHANT_ID}/delivery-order`, body, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
    },
  });
  return response.data;
}


