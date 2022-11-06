"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDelivery = exports.getFee = void 0;
const axios = require('axios');
const BASE_URL = 'https://daas-public-api.development.dev.woltapi.com';
const MERCHANT_ID = process.env.WOLT_MERCHANT_ID;
const API_KEY = process.env.WOLT_API_KEY;
const getFee = async (from, to) => {
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
    return response.data;
};
exports.getFee = getFee;
const createDelivery = async (from, to, comment, pickupContact, dropoffContact, title, category, orderId, comment2) => {
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
            "comment": comment2
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
    };
    const response = await axios.post(`${BASE_URL}/merchants/${MERCHANT_ID}/delivery-order`, body, {
        headers: {
            'Authorization': `Bearer ${API_KEY}`,
        },
    });
    return response.data;
};
exports.createDelivery = createDelivery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29sdC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImxpYi93b2x0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMvQixNQUFNLFFBQVEsR0FBRyxxREFBcUQsQ0FBQztBQUN2RSxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDO0FBQ2pELE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDO0FBV2xDLE1BQU0sTUFBTSxHQUFHLEtBQUssRUFBRSxJQUFZLEVBQUUsRUFBVSxFQUF3QixFQUFFO0lBQzdFLE1BQU0sV0FBVyxHQUFHO1FBQ2xCLE1BQU0sRUFBRTtZQUNOLFFBQVEsRUFBRTtnQkFDUixpQkFBaUIsRUFBRSxJQUFJO2FBQ3hCO1NBQ0Y7UUFDRCxPQUFPLEVBQUU7WUFDUCxRQUFRLEVBQUU7Z0JBQ1IsaUJBQWlCLEVBQUUsRUFBRTthQUN0QjtTQUNGO0tBQ0YsQ0FBQztJQUNGLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsY0FBYyxXQUFXLGVBQWUsRUFBRSxXQUFXLEVBQUU7UUFDbEcsT0FBTyxFQUFFO1lBQ1AsZUFBZSxFQUFFLFVBQVUsT0FBTyxFQUFFO1NBQ3JDO0tBQ0YsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxRQUFRLENBQUMsSUFBbUIsQ0FBQztBQUN0QyxDQUFDLENBQUE7QUFuQlksUUFBQSxNQUFNLFVBbUJsQjtBQU1NLE1BQU0sY0FBYyxHQUFHLEtBQUssRUFBRSxJQUFZLEVBQUUsRUFBVSxFQUMzRCxPQUFlLEVBQ2YsYUFBNkIsRUFBRSxjQUE4QixFQUM3RCxLQUFhLEVBQUUsUUFBZ0IsRUFDL0IsT0FBZSxFQUNmLFFBQWdCLEVBQ0MsRUFBRTtJQUNwQixNQUFNLElBQUksR0FBRztRQUNaLFFBQVEsRUFBRTtZQUNSLFVBQVUsRUFBRTtnQkFDVixtQkFBbUIsRUFBRSxJQUFJO2FBQzFCO1lBQ0QsT0FBTztZQUNQLGlCQUFpQixFQUFFO2dCQUNqQixJQUFJLEVBQUUsY0FBYyxDQUFDLElBQUk7Z0JBQ3pCLFlBQVksRUFBRSxjQUFjLENBQUMsS0FBSztnQkFDbEMsd0JBQXdCLEVBQUUsS0FBSzthQUNoQztTQUNGO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsVUFBVSxFQUFFO2dCQUNWLG1CQUFtQixFQUFFLEVBQUU7YUFDeEI7WUFDRCxpQkFBaUIsRUFBRTtnQkFDakIsSUFBSSxFQUFFLGFBQWEsQ0FBQyxJQUFJO2dCQUN4QixZQUFZLEVBQUUsYUFBYSxDQUFDLEtBQUs7Z0JBQ2pDLHdCQUF3QixFQUFFLEtBQUs7YUFDaEM7WUFDRCxTQUFTLEVBQUUsUUFBUTtTQUNwQjtRQUNELGtCQUFrQixFQUFFO1lBQ2xCLE9BQU8sRUFBRSxlQUFlO1lBQ3hCLGNBQWMsRUFBRSxXQUFXO1lBQzNCLEtBQUssRUFBRSxTQUFTO1NBQ2pCO1FBQ0QsNkJBQTZCLEVBQUUsT0FBTztRQUN0QyxlQUFlLEVBQUUsSUFBSTtRQUNyQixVQUFVLEVBQUU7WUFDVjtnQkFDRSxPQUFPLEVBQUUsQ0FBQztnQkFDVixhQUFhLEVBQUUsS0FBSztnQkFDcEIsWUFBWSxFQUFFLFFBQVE7Z0JBQ3RCLE1BQU0sRUFBRSxFQUFFO2FBQ1g7U0FDRjtRQUNELE1BQU0sRUFBRSxFQUFFO1FBQ1YsOEJBQThCLEVBQUUsQ0FBQztRQUNqQyx3QkFBd0IsRUFBRSxJQUFJO0tBQy9CLENBQUE7SUFDQyxNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxRQUFRLGNBQWMsV0FBVyxpQkFBaUIsRUFBRSxJQUFJLEVBQUU7UUFDN0YsT0FBTyxFQUFFO1lBQ1AsZUFBZSxFQUFFLFVBQVUsT0FBTyxFQUFFO1NBQ3JDO0tBQ0YsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO0FBQ3ZCLENBQUMsQ0FBQTtBQXZEWSxRQUFBLGNBQWMsa0JBdUQxQiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKTtcbmNvbnN0IEJBU0VfVVJMID0gJ2h0dHBzOi8vZGFhcy1wdWJsaWMtYXBpLmRldmVsb3BtZW50LmRldi53b2x0YXBpLmNvbSc7XG5jb25zdCBNRVJDSEFOVF9JRCA9IHByb2Nlc3MuZW52LldPTFRfTUVSQ0hBTlRfSUQ7XG5jb25zdCBBUElfS0VZID0gcHJvY2Vzcy5lbnYuV09MVF9BUElfS0VZO1xuXG5pbnRlcmZhY2UgRGVsaXZlcnlGZWUge1xuICB0aW1lX2VzdGltYXRlX21pbnV0ZXM6IG51bWJlcjtcbiAgZmVlOiB7XG4gICAgYW1vdW50OiBudW1iZXI7XG4gICAgY3VycmVuY3k6IHN0cmluZztcbiAgfSxcbiAgc2NoZWR1bGVkX2Ryb3BvZmZfdGltZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0RmVlID0gYXN5bmMgKGZyb206IHN0cmluZywgdG86IHN0cmluZyk6IFByb21pc2U8RGVsaXZlcnlGZWU+ID0+IHtcbiAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XG4gICAgcGlja3VwOiB7XG4gICAgICBsb2NhdGlvbjoge1xuICAgICAgICBmb3JtYXR0ZWRfYWRkcmVzczogZnJvbSxcbiAgICAgIH1cbiAgICB9LFxuICAgIGRyb3BvZmY6IHtcbiAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIGZvcm1hdHRlZF9hZGRyZXNzOiB0byxcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHtCQVNFX1VSTH0vbWVyY2hhbnRzLyR7TUVSQ0hBTlRfSUR9L2RlbGl2ZXJ5LWZlZWAsIHJlcXVlc3RCb2R5LCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7QVBJX0tFWX1gLFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2UuZGF0YSBhcyBEZWxpdmVyeUZlZTtcbn1cblxuaW50ZXJmYWNlIENvbnRhY3REZXRhaWxzIHtcbiAgbmFtZTogc3RyaW5nO1xuICBwaG9uZTogc3RyaW5nO1xufVxuZXhwb3J0IGNvbnN0IGNyZWF0ZURlbGl2ZXJ5ID0gYXN5bmMgKGZyb206IHN0cmluZywgdG86IHN0cmluZyxcbiAgY29tbWVudDogc3RyaW5nLFxuICBwaWNrdXBDb250YWN0OiBDb250YWN0RGV0YWlscywgZHJvcG9mZkNvbnRhY3Q6IENvbnRhY3REZXRhaWxzLFxuICB0aXRsZTogc3RyaW5nLCBjYXRlZ29yeTogc3RyaW5nLFxuICBvcmRlcklkOiBzdHJpbmcsXG4gIGNvbW1lbnQyOiBzdHJpbmdcbiAgKTogUHJvbWlzZTx2b2lkPiA9PiB7XG4gY29uc3QgYm9keSA9IHtcbiAgXCJwaWNrdXBcIjoge1xuICAgIFwibG9jYXRpb25cIjoge1xuICAgICAgXCJmb3JtYXR0ZWRfYWRkcmVzc1wiOiBmcm9tLFxuICAgIH0sXG4gICAgY29tbWVudCxcbiAgICBcImNvbnRhY3RfZGV0YWlsc1wiOiB7XG4gICAgICBuYW1lOiBkcm9wb2ZmQ29udGFjdC5uYW1lLFxuICAgICAgcGhvbmVfbnVtYmVyOiBkcm9wb2ZmQ29udGFjdC5waG9uZSxcbiAgICAgIFwic2VuZF90cmFja2luZ19saW5rX3Ntc1wiOiBmYWxzZVxuICAgIH1cbiAgfSxcbiAgXCJkcm9wb2ZmXCI6IHtcbiAgICBcImxvY2F0aW9uXCI6IHtcbiAgICAgIFwiZm9ybWF0dGVkX2FkZHJlc3NcIjogdG9cbiAgICB9LFxuICAgIFwiY29udGFjdF9kZXRhaWxzXCI6IHtcbiAgICAgIG5hbWU6IHBpY2t1cENvbnRhY3QubmFtZSxcbiAgICAgIHBob25lX251bWJlcjogcGlja3VwQ29udGFjdC5waG9uZSxcbiAgICAgIFwic2VuZF90cmFja2luZ19saW5rX3Ntc1wiOiBmYWxzZVxuICAgIH0sXG4gICAgXCJjb21tZW50XCI6IGNvbW1lbnQyXG4gIH0sXG4gIFwiY3VzdG9tZXJfc3VwcG9ydFwiOiB7XG4gICAgXCJlbWFpbFwiOiBcInRlc3RAbWFpbC5jb21cIixcbiAgICBcInBob25lX251bWJlclwiOiBcInRlc3RQaG9uZVwiLFxuICAgIFwidXJsXCI6IFwid2ViU2l0ZVwiXG4gIH0sXG4gIFwibWVyY2hhbnRfb3JkZXJfcmVmZXJlbmNlX2lkXCI6IG9yZGVySWQsXG4gIFwiaXNfbm9fY29udGFjdFwiOiB0cnVlLFxuICBcImNvbnRlbnRzXCI6IFtcbiAgICB7XG4gICAgICBcImNvdW50XCI6IDEsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IHRpdGxlLFxuICAgICAgXCJpZGVudGlmaWVyXCI6IGNhdGVnb3J5LFxuICAgICAgXCJ0YWdzXCI6IFtdXG4gICAgfVxuICBdLFxuICBcInRpcHNcIjogW10sXG4gIFwibWluX3ByZXBhcmF0aW9uX3RpbWVfbWludXRlc1wiOiAwLFxuICBcInNjaGVkdWxlZF9kcm9wb2ZmX3RpbWVcIjogbnVsbFxufVxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7QkFTRV9VUkx9L21lcmNoYW50cy8ke01FUkNIQU5UX0lEfS9kZWxpdmVyeS1vcmRlcmAsIGJvZHksIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtBUElfS0VZfWAsXG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiByZXNwb25zZS5kYXRhO1xufVxuXG5cbiJdfQ==