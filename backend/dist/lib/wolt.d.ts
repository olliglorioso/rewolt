interface DeliveryFee {
    time_estimate_minutes: number;
    fee: {
        amount: number;
        currency: string;
    };
    scheduled_dropoff_time: string;
}
export declare const getFee: (from: string, to: string) => Promise<DeliveryFee>;
interface ContactDetails {
    name: string;
    phone: string;
}
export declare const createDelivery: (from: string, to: string, comment: string, pickupContact: ContactDetails, dropoffContact: ContactDetails, title: string, category: string, orderId: string, comment2: string) => Promise<void>;
export {};
