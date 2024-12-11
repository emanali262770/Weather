import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const Mycontext = createContext();

const WetherContextData = ({ children }) => {
    const [value,setvalue]=useState("Lahore");
    const [WeatherData, setWeatherData] = useState([]);

  const getData = async () => {
    const weatherApi = `https://api.weatherapi.com/v1/current.json?key=222bf84e2ec94c49b47123609241012&q=${value}&aqi=no`;
    const { data } = await axios.get(weatherApi);

    setWeatherData([data]);
  };

  
  

  useEffect(() => {
    getData();
  }, [value]);
  return <Mycontext.Provider value={{ value,setvalue,WeatherData }}>{children}</Mycontext.Provider>;
};
export default WetherContextData;
