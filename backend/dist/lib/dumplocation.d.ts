interface DumpLocation {
    streetAddress: string;
    phoneNumber: string;
}
export declare const getDumpLocation: (lat: number, lon: number, type: string) => Promise<DumpLocation>;
export {};
