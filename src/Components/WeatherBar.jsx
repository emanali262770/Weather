import React, { useContext, useState } from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoMdNotifications } from "react-icons/io";
import { Mycontext } from '../context/Mycontext/Mycontext';

function WeatherBar() {
 
  
  const {value,setvalue} =useContext(Mycontext);
  
  
  return (
    <>
        <div className="bar w-[80%] mx-auto mt-10 flex justify-between">
            <div className="location flex gap-3 items-center">
                <CiLocationOn color='white' size={24}/>
                <select value={value} onChange={(e)=> setvalue(e.target.value)} className='bg-transparent text-white outline-none font-bold text-lg'>
                  <option value="" className='!bg-blue-400'>Select City</option>
                  <option value="Lahore" className='!bg-blue-400'>Lahore</option>
                  <option value="Karachi" className='!bg-blue-400'>Karachi</option>
                  <option value="Islamabad" className='!bg-blue-400'>Islamabad</option>
                  <option value="London" className='!bg-blue-400'>London</option>
                  <option value="India" className='!bg-blue-400'>India</option>
                </select>
                {/* <p className='text-white font-bold text-lg'>Lahore</p> */}
            </div>
            <div className="notification">
                <IoMdNotifications size={24} color='white'/>
            </div>
            
        </div>
    </>
  )
}

export default WeatherBar