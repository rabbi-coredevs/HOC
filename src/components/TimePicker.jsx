import { useCallback, useEffect, useRef, useState } from "react";
import { FaRegClock } from "react-icons/fa";
import ClockSvg from "../assets/ClockIcon.svg";
import DarkMode from "../DarkMode";

function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert 24-hour format to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12;

  // Pad minutes with leading zero if less than 10
  const currentTime = {
    hours,
    minutes,
    ampm,
  };
  return currentTime;
}
function formatTimeToISO(hours, minutes, ampm) {
  const now = new Date();
  let adjustedHours = hours % 12;
  if (ampm === "PM") {
    adjustedHours += 12;
  }
  now.setHours(adjustedHours, minutes, 0, 0);
  return now.toISOString();
}

const CustomTimePick = ({ onChange = () => {} }) => {
  const initialTime = getCurrentTime();
  const timePickerRef = useRef(null);
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [ampm, setAmPm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [wasOpen, setWasOpen] = useState(false);
  const [isTimeSelected, setIsTimeSelected] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  //handle click outside
  const handleClickOutside = useCallback(
    (event) => {
      if (
        timePickerRef.current &&
        !timePickerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setWasOpen(isOpen);
      }
    },
    [isOpen]
  );

  useEffect(() => {
    if (!isOpen && wasOpen) {
      if (isTimeSelected) {
        const isoTime = formatTimeToISO(hours, minutes, ampm);
        onChange(isoTime);
      }
    }
    setWasOpen(isOpen);
  }, [isOpen, wasOpen, isTimeSelected, hours, minutes, ampm, onChange]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const handleTimeSelection = (
    selectedHours,
    selectedMinutes,
    selectedAmPm
  ) => {
    setHours(selectedHours);
    setMinutes(selectedMinutes);
    setAmPm(selectedAmPm);
    setIsTimeSelected(true);
  };

  return (
    <div className={`pt-2`} ref={timePickerRef}>
      <div
        className="flex justify-between items-center px-4 h-10 rounded bg-[#121a27] select-none cursor-pointer w-[180px]"
        onClick={toggleDropdown}
      >
        <div className="text-white">
          {isTimeSelected
            ? `${hours.toString().padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")} ${ampm}`
            : "Select Time"}
        </div>

        <div className="cursor-pointer text-white pl-2 border-l">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.1668 10.0002C19.1668 15.0627 15.0627 19.1668 10.0002 19.1668C4.93755 19.1668 0.833496 15.0627 0.833496 10.0002C0.833496 4.93755 4.93755 0.833496 10.0002 0.833496C15.0627 0.833496 19.1668 4.93755 19.1668 10.0002ZM2.50585 10.0002C2.50585 14.1392 5.86117 17.4945 10.0002 17.4945C14.1392 17.4945 17.4945 14.1392 17.4945 10.0002C17.4945 5.86117 14.1392 2.50585 10.0002 2.50585C5.86117 2.50585 2.50585 5.86117 2.50585 10.0002Z"
              fill="#A9B5C5"
            />
            <path
              d="M10.0003 4.16699C9.54008 4.16699 9.16699 4.54008 9.16699 5.00033V10.3892C9.16699 10.3892 9.16699 10.6065 9.27258 10.7699C9.34324 10.9085 9.45341 11.0289 9.59816 11.1125L13.448 13.3352C13.8466 13.5653 14.3562 13.4287 14.5863 13.0302C14.8164 12.6316 14.6799 12.1219 14.2813 11.8918L10.8337 9.90133V5.00033C10.8337 4.54009 10.4606 4.16699 10.0003 4.16699Z"
              fill="#A9B5C5"
            />
          </svg>
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-10 bg-[#121a27] mt-2 rounded">
          <div className="flex justify-center p-2 h-80">
            <ul className="overflow-y-auto no-scrollbar">
              {[...Array(12).keys()].map((value, index) => {
                const hour = value + 1; // Adjust value to range from 1 to 12
                return (
                  <li
                    key={index}
                    className={`px-4 py-1 mt-[2px] cursor-pointer rounded-lg text-white ${
                      hours === hour
                        ? "text-[#f5f5f5] bg-blue-500"
                        : "hover:bg-blue-300"
                    }`}
                    onClick={() => handleTimeSelection(hour, minutes, "AM")}
                  >
                    {hour.toString().padStart(2, "0")}
                  </li>
                );
              })}
            </ul>

            <ul className="overflow-y-auto no-scrollbar mx-1">
              {[...Array(60).keys()].map((minute) => (
                <li
                  key={minute}
                  className={`px-4 py-1 mt-[2px] cursor-pointer rounded-lg text-white ${
                    minutes === minute
                      ? "text-[#f5f5f5] bg-blue-500"
                      : "hover:bg-blue-300"
                  }`}
                  onClick={() => handleTimeSelection(hours, minute, ampm)}
                >
                  {minute.toString().padStart(2, "0")}
                </li>
              ))}
            </ul>

            <ul>
              {["AM", "PM"]
                .sort((a, b) =>
                  a === initialTime.ampm ? -1 : b === initialTime.ampm ? 1 : 0
                )
                .map((value, index) => (
                  <li
                    key={index}
                    className={`px-4 py-1 mt-[2px] cursor-pointer rounded-lg text-white ${
                      ampm === value
                        ? "text-[#f5f5f5] bg-blue-500"
                        : "hover:bg-blue-300"
                    }`}
                    onClick={() => handleTimeSelection(hours, minutes, value)}
                  >
                    {value}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const TimePicker = DarkMode(CustomTimePick);

export default TimePicker;
