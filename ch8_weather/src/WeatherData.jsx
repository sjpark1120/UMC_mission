import React from 'react'

export default function WeatherData({ weather }) {
  return (
    <div className='weather_box'>
      <div className='weather_city'>{weather.name}</div>
      <div className='weather_temp'>{Math.round(((weather.main.temp - 273.15) * 10)) / 10}℃</div>
      <div className='weather_main'>{weather.weather[0].main}</div>
    </div>
  )
}
