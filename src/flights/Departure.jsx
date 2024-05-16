import FlightCard from "./FlightCard";

const Departure = ({ flight = {} }) => {
  const { departure } = flight;

  // Ensure departure information is available before rendering
  if (!departure) return null;

  const { airport, iata, icao } = departure;

  return (
    <div className="p-2 flex flex-col items-center ">
      <p className="py-1.5 px-3 bg-[#EBECEE] rounded-full ">Departure</p>
      <h1 className="font-bold text-xl py-2">{airport}</h1>
      <div className="flex items-center gap-2 text-gray-500 text-sm">
        <span>IATA: {iata || 'N/A'}</span>
        <span className="bg-gray-600 size-1.5 rounded-full"></span>
        <span>ICAO: {icao || 'N/A'}</span> 
      </div>
      <div>
        <FlightCard
          scheduledArrival={departure.scheduled}
          actualArrival={departure.actual || 'NULL'}
          estimatedArrival={departure.estimated}
          arrivalRunway={departure.actualRunway || 'NULL'}
        />
      </div>
    </div>
  );
};

export default Departure;
