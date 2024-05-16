const FlightCard = ({
  scheduledArrival = "",
  actualArrival = "",
  estimatedArrival = "",
  arrivalRunway = "",
}) => {

    const gridItems = [
        { title: "Scheduled", data: scheduledArrival },
        { title: "Estimated", data: estimatedArrival },
        { title: "Actual", data: actualArrival },
        { title: "Runway", data: arrivalRunway }
      ];

  return (
    <div className="p-2 text-center grid grid-cols-2 gap-1">
    {gridItems.map((item, index) => (
      <div key={index} className="bg-[#ECEDF1] py-2 px-4">
        <h1 className="text-lg">{item.title}</h1>
        <p className="text-sm">{item.data}</p>
      </div>
    ))}
  </div>
  );
};

export default FlightCard;
