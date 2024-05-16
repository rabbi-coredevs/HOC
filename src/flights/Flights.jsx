import { IoIosAirplane } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import ArriDep from "./ArriDep";
import Terminal from "./Terminal";
import { useRef, useState } from "react";
import { flightApiCall } from "../utils/flightApi";
import axios from "axios";
import { getApiCall } from "../utils/apiCaller";
import ArriVal from "./ArriDep";
import Departure from "./Departure";

const Flights = () => {
  const searchInputRef = useRef(null);
  const [flight, setFlight] = useState({});
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);



  const handleFlightClick = (e) => {
    e.preventDefault();
    const flight_number = searchInputRef.current.value;
    if(flight_number){
        setLoading(true);
        getApiCall(`/flights?flight_number=${flight_number}`)
        .then(response => {
            if (response.success) {
                console.log(response.data)
              setFlight(response.data);
              setError('');
            } else {
              setError(response.data);
              setFlight([]);
            }
          })
          .catch(error => {
            setError('Something went wrong. Please try again.');
            setFlight([]);
          })
          .finally(() => setLoading(false));
           
    }

  };
  if(loading) return <p>Loading.....</p>;
//   console.log(flight,'FOUND')

  return (
    <>
      <div className="w-1/4">
    
        <div className="w-full h-16  bg-[#ECEDF1] flex items-center justify-center">
          <input
            type="text"
            ref={searchInputRef}
            placeholder="Search flights.."
            className="outline-none border h-12 px-3"
            required
          />
          <CiSearch
            className="text-2xl hover:text-3xl cursor-pointer ml-2"
            onClick={(e) => handleFlightClick(e)}
          />
        </div>
        <div className=" text-center p-2 bg-[#ffff]">
          <div className="">
            <h1 className="font-bold text-2xl">{flight?.departure?.iata}</h1>
            <p>{flight?.departure?.airport}</p>
          </div>
          <div className="flex justify-center p-2">
            <IoIosAirplane className="text-4xl font-bold" />
          </div>
          <div className="">
            <h1 className="font-bold text-2xl">{flight?.arrival?.iata}</h1>
            <p>{flight?.arrival?.airport}</p>
          </div>
        </div>
        <div className="w-full h-16 bg-[#2FBD4F] text-white flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl">Airborne</h1>
          <p>On Time</p>
        </div>
        <Departure flight={flight}/>
        <Terminal gate = {flight?.arrival?.gate || 'Null'} terminal = {flight?.arrival?.terminal || 'Null'}/>
        <ArriVal flight = {flight}/>
      </div>
    </>
  );
};

export default Flights;
