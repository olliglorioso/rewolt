const axios = require("axios");
const BASE_URL = "https://dump-location-uxsxrlriaa-lm.a.run.app";
const getDumpLocation = async (lat, lon, type) => {
    const response = await axios.post(`${BASE_URL}`, {
        location: [lat, lon],
        type
    });
    return response.data;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVtcGxvY2F0aW9uLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsibGliL2R1bXBsb2NhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDL0IsTUFBTSxRQUFRLEdBQUcsK0NBQStDLENBQUM7QUFJakUsTUFBTSxlQUFlLEdBQUcsS0FBSyxFQUFFLEdBQVcsRUFBRSxHQUFXLEVBQUUsSUFBWSxFQUFFLEVBQUU7SUFDdkUsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsUUFBUSxFQUFFLEVBQUU7UUFDL0MsUUFBUSxFQUFFLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztRQUNwQixJQUFJO0tBQ0wsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO0FBQ3ZCLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF4aW9zID0gcmVxdWlyZShcImF4aW9zXCIpO1xuY29uc3QgQkFTRV9VUkwgPSBcImh0dHBzOi8vZHVtcC1sb2NhdGlvbi11eHN4cmxyaWFhLWxtLmEucnVuLmFwcFwiO1xuXG5cblxuY29uc3QgZ2V0RHVtcExvY2F0aW9uID0gYXN5bmMgKGxhdDogc3RyaW5nLCBsb246IHN0cmluZywgdHlwZTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHtCQVNFX1VSTH1gLCB7XG4gICAgbG9jYXRpb246IFtsYXQsIGxvbl0sXG4gICAgdHlwZVxuICB9KTtcbiAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG59Il19