import axios from "axios";

export const flightApiCall =()=>{
    const apiUrl = `http://api.aviationstack.com/v1/flights?access_key=6644cd9c45f2ed77cd78b38d837fd7bb`;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .get(apiUrl, config)
      .then((response) => {
        const flightData = response.data.data;
        console.log(flightData);
        // const desiredFlight = flightData.find(item => item.flight.number === searchQuery);
        // console.log(desiredFlight);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

}
