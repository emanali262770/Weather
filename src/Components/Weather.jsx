import React from 'react'
import WeatherBar from './WeatherBar'
import WeatherImage from './WeatherImage'
import WeatherData from './WeatherData'

function Weather() {
  return (
    <div className='w-[100%] h-[100vh] flex justify-center items-center'>
       <div className='w-[430px] shadow-xl  h-[100%] md:h-[85%]   bg-[linear-gradient(#47BFDF,#4A91FF)] rounded-none md:rounded-lg'>
        <WeatherBar/>
        <WeatherImage/>
        <WeatherData/>
       </div>
    </div>
  )
}

export default Weather