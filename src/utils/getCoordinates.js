import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyCuBhdFf7s-ipOzlY28rYbDMg2LeMqNsks");

export default address =>
  Geocode.fromAddress(address).then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
      console.log(`rendering geocode: ${lat}, ${lng}`);
      return { lat, lng };
    },
    error => {
      //TODO error handling
      console.error(error);
    }
  );
