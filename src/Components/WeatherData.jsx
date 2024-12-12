import React, { useContext } from "react";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { Mycontext } from "../context/Mycontext/Mycontext";

function WeatherData() {
  const { WeatherData, loading } = useContext(Mycontext);

  return (
    <div>
      <div className="flex justify-center">
        <div className="w-[80%] h-[200px] relative z-0 border border-white rounded-xl">
          <div className="absolute inset-0 bg-white opacity-20 rounded-xl"></div>

          {loading ? (
            <button
              type="button"
              className="bg-indigo-500 text-white  absolute inset-0  px-4 py-2 rounded"
              disabled
            >
              <svg
                className="animate-spin h-5 w-5 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  d="M4 12a8 8 0 018-8"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
              Loading...
            </button>
          ) : (
            WeatherData.map((data, i) => (
              <div
                key={i}
                className="flex flex-col justify-center items-center mt-3"
              >
                <p className="text-white text-[14px]">
                  Today, {data.current.last_updated}
                </p>
                <h1 className="text-white text-5xl mt-4">
                  {Math.floor(data.current.temp_c)}&deg;
                </h1>
                <h1 className="text-white ">{data.current.condition.text}</h1>

                <div className="weather_speed">
                  <div className="speed py-2 flex gap-3">
                    <div className="flex gap-2 ">
                      <FaWind color="white" size={20} />
                      <p className="text-white text-base">Wind</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-white font-thin">|</span>
                      <p className="text-white text-base">
                        {data.current.wind_kph} km/h
                      </p>
                    </div>
                  </div>
                  <div className="speed py-2 flex gap-3">
                    <div className="flex gap-2 ">
                      <WiHumidity color="white" size={20} />
                      <p className="text-white text-base">Humidity</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-white font-thin">|</span>
                      <p className="text-white text-base">
                        {data.current.humidity} %
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="button flex justify-center items-center py-10">
        <button className="bg-white text-gray-600 px-3 py-2 shadow-sm shadow-[#3d4a4c] rounded-full text-sm">
          Forecast Report
        </button>
      </div>
    </div>
  );
}

export default WeatherData;
