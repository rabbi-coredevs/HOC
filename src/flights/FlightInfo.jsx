import FlightCard from "./FlightCard";

const FlightInfo = ({ flight = {}, type }) => {
  const flightInfo = type === "departure" ? flight.departure : flight.arrival;

  // Ensure flight information is available before rendering
  if (!flightInfo) return null;

  const { airport, iata, icao } = flightInfo;

  return (
    <div className="p-2 flex flex-col items-center ">
      <p className="py-1.5 px-3 bg-[#EBECEE] rounded-full ">
        {type === "departure" ? "Departure" : "Arrival"}
      </p>
      <h1 className="font-bold text-xl py-2">{airport}</h1>
      <div className="flex items-center gap-2 text-gray-500 text-sm">
        <span>IATA: {iata || "N/A"}</span>
        <span className="bg-gray-600 size-1.5 rounded-full"></span>
        <span>ICAO: {icao || "N/A"}</span> {/* Ensure proper property access */}
      </div>
      <div>
        {/* Pass flight information to FlightCard */}
        <FlightCard
          scheduledArrival={flightInfo.scheduled}
          actualArrival={flightInfo.actual || "NULL"}
          estimatedArrival={flightInfo.estimated}
          arrivalRunway={flightInfo.actualRunway || "NULL"}
        />
      </div>
    </div>
  );
};

export default FlightInfo;
