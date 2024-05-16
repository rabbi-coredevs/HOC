import FlightCard from "./FlightCard";

const Departure = ({flight = {}}) => {
  
  return (
    <div className="p-2 flex flex-col items-center ">
      <p className="py-1.5 px-3 bg-[#EBECEE] rounded-full ">Departure</p>
      <h1 className="font-bold text-xl py-2">{flight?.departure?.airport}</h1>
      <div className="flex items-center gap-2 text-gray-500 text-sm">
        <span>IATA:{flight?.departure?.iata}</span>
        <span className="bg-gray-600 size-1.5 rounded-full"></span>
        <span>ICAO:{flight?.arrival?.iata}</span>
      </div>
      <div>
              <FlightCard
               scheduledArrival={flight?.departure?.scheduled} 
               actualArrival={flight?.departure?.actual || 'NULL'}
               estimatedArrival={flight?.departure?.estimated}
               arrivalRunway = {flight?.departure?.actualRunway || 'NULL'}
              />
            </div>
      
      </div>
  );
};

export default Departure;
