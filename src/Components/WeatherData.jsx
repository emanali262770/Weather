import axios from "axios";
import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaWind } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { Mycontext } from "../context/Mycontext/Mycontext";

function WeatherData() {
 const {value,WeatherData}=useContext(Mycontext)

console.log(value);

  // const [WeatherData, setWeatherData] = useState([]);

  // const getData = async () => {
  //   const weatherApi = `https://api.weatherapi.com/v1/current.json?key=222bf84e2ec94c49b47123609241012&q=${value}&aqi=no`;
  //   const { data } = await axios.get(weatherApi);

  //   setWeatherData([data]);
  // };

  // console.log(WeatherData);
  

  // useEffect(() => {
  //   getData();
  // }, [value]);

  return (
    <div>
      <div className="flex justify-center">
        <div className="w-[80%] h-[200px] relative z-0 border border-white rounded-xl">
          <div className="absolute inset-0 bg-white opacity-20 rounded-xl"></div>
          
        
          {WeatherData?.map((data,i) => {
            return <div key={i} className="flex flex-col justify-center items-center mt-3">
               <p  className="text-white text-[14px] ">Today,{data.current.last_updated}</p>
            <h1 className="text-white text-5xl mt-4">{Math.floor(data.current.temp_c)}&deg;</h1>
            <h1 className="text-white ">{data.current.condition.text}</h1>

            <div className="weather_speed">
             
             
                  <div  className="speed py-2 flex gap-3">
                    <div className="flex gap-2 ">
                    <FaWind color="white " size={20} />
                      <p className="text-white  text-base">wind</p>
                    </div>

                    <div className=" flex gap-3">
                      <span className="text-white font-thin">|</span>
                      <p className="text-white text-base">{data.current.wind_kph} km/h</p>
                    </div>
                  </div>

                  
                  <div  className="speed py-2 flex gap-3">
                    <div className="flex gap-2 ">
                    <WiHumidity color="white " size={20} />
                      <p className="text-white  text-base">Hum</p>
                    </div>

                    <div className=" flex gap-3">
                      <span className="text-white font-thin">|</span>
                      <p className="text-white text-base">{data.current.humidity} %</p>
                    </div>
                  </div>
                
            
            </div>
            </div>;
          })}
           
            
         
        </div>
      </div>
      <div className="button flex justify-center  items-center py-10">
        <button className="bg-white text-gray-600 px-3 py-2 shadow-sm shadow-[#3d4a4c] rounded-full text-sm">
          Forcast Report
        </button>
      </div>
    </div>
  );
}

export default WeatherData;
