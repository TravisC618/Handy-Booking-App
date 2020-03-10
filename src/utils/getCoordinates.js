import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyCuBhdFf7s-ipOzlY28rYbDMg2LeMqNsks");
export const getCoordinates = address =>
  Geocode.fromAddress(address).then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
      return { lat, lng };
    },
    error => {
      //TODO error handling
      console.error(error);
    }
  );
