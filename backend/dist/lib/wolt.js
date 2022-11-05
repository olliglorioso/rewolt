"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDelivery = exports.getFee = void 0;
const constants_1 = require("../constants");
const axios = require('axios');
const BASE_URL = 'https://daas-public-api.development.dev.woltapi.com';
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
    const response = await axios.post(`${BASE_URL}/merchants/${constants_1.WOLT_MERCHANT_ID}/delivery-fee`, requestBody, {
        headers: {
            'Authorization': `Bearer ${constants_1.WOLT_API_KEY}`,
        },
    });
    return response.data;
};
exports.getFee = getFee;
const createDelivery = async (from, to, comment, pickupContact, dropoffContact, title, category, orderId) => {
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
            "email": "string",
            "phone_number": "string",
            "url": "string"
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
    const response = await axios.post(`${BASE_URL}/merchants/${constants_1.WOLT_MERCHANT_ID}/delivery-order`, body, {
        headers: {
            'Authorization': `Bearer ${constants_1.WOLT_API_KEY}`,
        },
    });
    return response.data;
};
exports.createDelivery = createDelivery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29sdC5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbImxpYi93b2x0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDRDQUE4RDtBQUU5RCxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsTUFBTSxRQUFRLEdBQUcscURBQXFELENBQUM7QUFXaEUsTUFBTSxNQUFNLEdBQUcsS0FBSyxFQUFFLElBQVksRUFBRSxFQUFVLEVBQXdCLEVBQUU7SUFDN0UsTUFBTSxXQUFXLEdBQUc7UUFDbEIsTUFBTSxFQUFFO1lBQ04sUUFBUSxFQUFFO2dCQUNSLGlCQUFpQixFQUFFLElBQUk7YUFDeEI7U0FDRjtRQUNELE9BQU8sRUFBRTtZQUNQLFFBQVEsRUFBRTtnQkFDUixpQkFBaUIsRUFBRSxFQUFFO2FBQ3RCO1NBQ0Y7S0FDRixDQUFDO0lBQ0YsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxjQUFjLDRCQUFnQixlQUFlLEVBQUUsV0FBVyxFQUFFO1FBQ3ZHLE9BQU8sRUFBRTtZQUNQLGVBQWUsRUFBRSxVQUFVLHdCQUFZLEVBQUU7U0FDMUM7S0FDRixDQUFDLENBQUM7SUFDSCxPQUFPLFFBQVEsQ0FBQyxJQUFtQixDQUFDO0FBQ3RDLENBQUMsQ0FBQTtBQW5CWSxRQUFBLE1BQU0sVUFtQmxCO0FBTU0sTUFBTSxjQUFjLEdBQUcsS0FBSyxFQUFFLElBQVksRUFBRSxFQUFVLEVBQzNELE9BQWUsRUFDZixhQUE2QixFQUFFLGNBQThCLEVBQzdELEtBQWEsRUFBRSxRQUFnQixFQUMvQixPQUFlLEVBQ0UsRUFBRTtJQUNwQixNQUFNLElBQUksR0FBRztRQUNaLFFBQVEsRUFBRTtZQUNSLFVBQVUsRUFBRTtnQkFDVixtQkFBbUIsRUFBRSxJQUFJO2FBQzFCO1lBQ0QsT0FBTztZQUNQLGlCQUFpQixFQUFFO2dCQUNqQixJQUFJLEVBQUUsY0FBYyxDQUFDLElBQUk7Z0JBQ3pCLFlBQVksRUFBRSxjQUFjLENBQUMsS0FBSztnQkFDbEMsd0JBQXdCLEVBQUUsS0FBSzthQUNoQztTQUNGO1FBQ0QsU0FBUyxFQUFFO1lBQ1QsVUFBVSxFQUFFO2dCQUNWLG1CQUFtQixFQUFFLEVBQUU7YUFDeEI7WUFDRCxpQkFBaUIsRUFBRTtnQkFDakIsSUFBSSxFQUFFLGFBQWEsQ0FBQyxJQUFJO2dCQUN4QixZQUFZLEVBQUUsYUFBYSxDQUFDLEtBQUs7Z0JBQ2pDLHdCQUF3QixFQUFFLEtBQUs7YUFDaEM7WUFDRCxTQUFTLEVBQUUsMkJBQTJCO1NBQ3ZDO1FBQ0Qsa0JBQWtCLEVBQUU7WUFDbEIsT0FBTyxFQUFFLFFBQVE7WUFDakIsY0FBYyxFQUFFLFFBQVE7WUFDeEIsS0FBSyxFQUFFLFFBQVE7U0FDaEI7UUFDRCw2QkFBNkIsRUFBRSxPQUFPO1FBQ3RDLGVBQWUsRUFBRSxJQUFJO1FBQ3JCLFVBQVUsRUFBRTtZQUNWO2dCQUNFLE9BQU8sRUFBRSxDQUFDO2dCQUNWLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixZQUFZLEVBQUUsUUFBUTtnQkFDdEIsTUFBTSxFQUFFLEVBQUU7YUFDWDtTQUNGO1FBQ0QsTUFBTSxFQUFFLEVBQUU7UUFDViw4QkFBOEIsRUFBRSxDQUFDO1FBQ2pDLHdCQUF3QixFQUFFLElBQUk7S0FDL0IsQ0FBQTtJQUNDLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsY0FBYyw0QkFBZ0IsaUJBQWlCLEVBQUUsSUFBSSxFQUFFO1FBQ2xHLE9BQU8sRUFBRTtZQUNQLGVBQWUsRUFBRSxVQUFVLHdCQUFZLEVBQUU7U0FDMUM7S0FDRixDQUFDLENBQUM7SUFDSCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7QUFDdkIsQ0FBQyxDQUFBO0FBdERZLFFBQUEsY0FBYyxrQkFzRDFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV09MVF9BUElfS0VZLCBXT0xUX01FUkNIQU5UX0lEIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJyk7XG5jb25zdCBCQVNFX1VSTCA9ICdodHRwczovL2RhYXMtcHVibGljLWFwaS5kZXZlbG9wbWVudC5kZXYud29sdGFwaS5jb20nO1xuXG5pbnRlcmZhY2UgRGVsaXZlcnlGZWUge1xuICB0aW1lX2VzdGltYXRlX21pbnV0ZXM6IG51bWJlcjtcbiAgZmVlOiB7XG4gICAgYW1vdW50OiBudW1iZXI7XG4gICAgY3VycmVuY3k6IHN0cmluZztcbiAgfSxcbiAgc2NoZWR1bGVkX2Ryb3BvZmZfdGltZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0RmVlID0gYXN5bmMgKGZyb206IHN0cmluZywgdG86IHN0cmluZyk6IFByb21pc2U8RGVsaXZlcnlGZWU+ID0+IHtcbiAgY29uc3QgcmVxdWVzdEJvZHkgPSB7XG4gICAgcGlja3VwOiB7XG4gICAgICBsb2NhdGlvbjoge1xuICAgICAgICBmb3JtYXR0ZWRfYWRkcmVzczogZnJvbSxcbiAgICAgIH1cbiAgICB9LFxuICAgIGRyb3BvZmY6IHtcbiAgICAgIGxvY2F0aW9uOiB7XG4gICAgICAgIGZvcm1hdHRlZF9hZGRyZXNzOiB0byxcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHtCQVNFX1VSTH0vbWVyY2hhbnRzLyR7V09MVF9NRVJDSEFOVF9JRH0vZGVsaXZlcnktZmVlYCwgcmVxdWVzdEJvZHksIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtXT0xUX0FQSV9LRVl9YCxcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGEgYXMgRGVsaXZlcnlGZWU7XG59XG5cbmludGVyZmFjZSBDb250YWN0RGV0YWlscyB7XG4gIG5hbWU6IHN0cmluZztcbiAgcGhvbmU6IHN0cmluZztcbn1cbmV4cG9ydCBjb25zdCBjcmVhdGVEZWxpdmVyeSA9IGFzeW5jIChmcm9tOiBzdHJpbmcsIHRvOiBzdHJpbmcsXG4gIGNvbW1lbnQ6IHN0cmluZyxcbiAgcGlja3VwQ29udGFjdDogQ29udGFjdERldGFpbHMsIGRyb3BvZmZDb250YWN0OiBDb250YWN0RGV0YWlscyxcbiAgdGl0bGU6IHN0cmluZywgY2F0ZWdvcnk6IHN0cmluZyxcbiAgb3JkZXJJZDogc3RyaW5nLFxuICApOiBQcm9taXNlPHZvaWQ+ID0+IHtcbiBjb25zdCBib2R5ID0ge1xuICBcInBpY2t1cFwiOiB7XG4gICAgXCJsb2NhdGlvblwiOiB7XG4gICAgICBcImZvcm1hdHRlZF9hZGRyZXNzXCI6IGZyb20sXG4gICAgfSxcbiAgICBjb21tZW50LFxuICAgIFwiY29udGFjdF9kZXRhaWxzXCI6IHtcbiAgICAgIG5hbWU6IGRyb3BvZmZDb250YWN0Lm5hbWUsXG4gICAgICBwaG9uZV9udW1iZXI6IGRyb3BvZmZDb250YWN0LnBob25lLFxuICAgICAgXCJzZW5kX3RyYWNraW5nX2xpbmtfc21zXCI6IGZhbHNlXG4gICAgfVxuICB9LFxuICBcImRyb3BvZmZcIjoge1xuICAgIFwibG9jYXRpb25cIjoge1xuICAgICAgXCJmb3JtYXR0ZWRfYWRkcmVzc1wiOiB0b1xuICAgIH0sXG4gICAgXCJjb250YWN0X2RldGFpbHNcIjoge1xuICAgICAgbmFtZTogcGlja3VwQ29udGFjdC5uYW1lLFxuICAgICAgcGhvbmVfbnVtYmVyOiBwaWNrdXBDb250YWN0LnBob25lLFxuICAgICAgXCJzZW5kX3RyYWNraW5nX2xpbmtfc21zXCI6IGZhbHNlXG4gICAgfSxcbiAgICBcImNvbW1lbnRcIjogXCJMZWF2ZSBhdCB0aGUgZG9vciwgcGxlYXNlXCJcbiAgfSxcbiAgXCJjdXN0b21lcl9zdXBwb3J0XCI6IHtcbiAgICBcImVtYWlsXCI6IFwic3RyaW5nXCIsXG4gICAgXCJwaG9uZV9udW1iZXJcIjogXCJzdHJpbmdcIixcbiAgICBcInVybFwiOiBcInN0cmluZ1wiXG4gIH0sXG4gIFwibWVyY2hhbnRfb3JkZXJfcmVmZXJlbmNlX2lkXCI6IG9yZGVySWQsXG4gIFwiaXNfbm9fY29udGFjdFwiOiB0cnVlLFxuICBcImNvbnRlbnRzXCI6IFtcbiAgICB7XG4gICAgICBcImNvdW50XCI6IDEsXG4gICAgICBcImRlc2NyaXB0aW9uXCI6IHRpdGxlLFxuICAgICAgXCJpZGVudGlmaWVyXCI6IGNhdGVnb3J5LFxuICAgICAgXCJ0YWdzXCI6IFtdXG4gICAgfVxuICBdLFxuICBcInRpcHNcIjogW10sXG4gIFwibWluX3ByZXBhcmF0aW9uX3RpbWVfbWludXRlc1wiOiAwLFxuICBcInNjaGVkdWxlZF9kcm9wb2ZmX3RpbWVcIjogbnVsbFxufVxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7QkFTRV9VUkx9L21lcmNoYW50cy8ke1dPTFRfTUVSQ0hBTlRfSUR9L2RlbGl2ZXJ5LW9yZGVyYCwgYm9keSwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke1dPTFRfQVBJX0tFWX1gLFxuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbn1cblxuXG4iXX0=