import AuthDashboard from "./Dashboard"
import CandyDispenser from "./components/Candy";
import Counter from "./components/Counter";
import DragAndDropExample from "./components/DropAndUpload";
import Swap from "./components/Swap";
import TimePicker from "./components/TimePicker";
import CustomTimePick from "./components/TimePicker";
import CountryDialCode from "./countryDialDropdown/CountryDialCode"
import Flights from "./flights/Flights";
import { FaClock } from "react-icons/fa";


function App() {
  const handleTime = (hours,minutes,ampm) => {
    console.log(hours,minutes,ampm);
  }

  return (
    <div className="flex gap-2">
    {/* <AuthDashboard/> */}
    {/* <CountryDialCode/> */}
    {/* <Flights/> */}
    {/* <DragAndDropExample/> */}
    {/* <CustomTimePick onChange={handleTime}/> */}
    {/* <TimePicker onChange = {handleTime}/> */}
    {/* <Counter/>
    <Counter/>
    <CandyDispenser/> */}
    <Swap/>
    </div>
  )
}

export default App;
