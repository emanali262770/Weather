import axios from "axios";
import { createContext, useEffect, useState } from "react";
import UseFetch from "../../CustomHook/UseFetch";

export const Mycontext = createContext();

const WetherContextData = ({ children }) => {
    const [value,setvalue]=useState("Lahore");
  
  const {WeatherData,loading}=UseFetch(value)
 
  
  return <Mycontext.Provider value={{ value,setvalue,WeatherData,loading }}>
    
    {children}
    </Mycontext.Provider>;
};
export default WetherContextData;
