import React, { useContext } from "react";
import cloud from '../../public/cloud.png';
import { Mycontext } from "../context/Mycontext/Mycontext";
function WeatherImage() {
  const {WeatherData}=useContext(Mycontext);
  console.log(WeatherData);
  
  return (
    <div>
      <div className="image flex justify-center">
        {
          WeatherData.map((data,i)=>{
            return <div key={i}>
                     <img src={data.current.condition.icon} alt="" className="w-[200px]" />
            </div>
          })
        }
       
      </div>
    </div>
  );
}

export default WeatherImage;
