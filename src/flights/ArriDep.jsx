import FlightCard from "./FlightCard";

const ArriVal = ({flight = {}}) => {
  
  return (
    <div className="p-2 flex flex-col items-center ">
      <p className="py-1.5 px-3 bg-[#EBECEE] rounded-full ">Arrival</p>
      <h1 className="font-bold text-xl py-2">{flight?.arrival?.airport}</h1>
      <div className="flex items-center gap-2 text-gray-500 text-sm">
        <span>IATA:{flight?.arrival?.iata}</span>
        <span className="bg-gray-600 size-1.5 rounded-full"></span>
        <span>ICAO:{flight?.departure?.iata}</span>
      </div>
      <div>
              <FlightCard
               scheduledArrival={flight?.arrival?.scheduled} 
               actualArrival={flight?.arrival?.actual || 'NULL'}
               estimatedArrival={flight?.arrival?.estimated}
               arrivalRunway = {flight?.arrival?.actualRunway || 'NULL'}
              />
            </div>
      
      </div>
  );
};

export default ArriVal;
