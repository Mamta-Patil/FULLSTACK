"use client";

import { useDispatch, useSelector } from "react-redux";
import { convertCelsius, convertFahrenheit } from "@/redux/temperatureSlice";

const TemperatureConverter = () => {
  const dispatch = useDispatch();
  const { celsius, fahrenheit } = useSelector((state) => state.temperature);

  const handleCelsiusChange = (e) => {
    dispatch(convertCelsius(Number(e.target.value) || 0));
  };

  const handleFahrenheitChange = (e) => {
    dispatch(convertFahrenheit(Number(e.target.value) || 0));
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md w-80">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Temperature Converter</h2>
      
      <div className="flex flex-col gap-4 w-full">
        <div>
          <label className="block text-gray-700 dark:text-white">Celsius:</label>
          <input
            type="number"
            value={celsius}
            onChange={handleCelsiusChange}
            className="px-3 py-2 border rounded-md w-full"
          />
        </div>
        
        <div>
          <label className="block text-gray-700 dark:text-white">Fahrenheit:</label>
          <input
            type="number"
            value={fahrenheit}
            onChange={handleFahrenheitChange}
            className="px-3 py-2 border rounded-md w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TemperatureConverter;
