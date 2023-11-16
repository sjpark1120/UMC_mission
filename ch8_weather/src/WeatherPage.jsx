import React, { useState } from 'react';
import Axios from 'axios';
import WeatherData from './WeatherData';

export default function WeatherPage() {
    const [cityName, setCityName] = useState('');
    const [weather, setWeater] = useState('');
    const API_KEY = "21a4f0da416b395b495830f757ea6ae3";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
  
    const onChangeCity = (e) =>{
      setCityName(e.target.value);
    }

    const onKeyDownEnter = (e) =>{
        if(e.key === "Enter") {
            searchWeather();
          }
    }

    const searchWeather = async() =>{
        try{
            console.log(url)
            Axios.get(url)
            .then(function (response) {
                // 성공한 경우 실행
                console.log(response.data);
                setWeater(response.data);
            })
            .catch(function (error) {
                // 에러인 경우 실행
                console.log(error);
                setWeater('');
            })
        }catch{
            alert('에러남')
        }
    }

  return (
    <div className='weather_container'>
      <input className='input_city' value={cityName} onChange={onChangeCity} onKeyDown={onKeyDownEnter} placeholder='도시를 입력하세요'/>
      {weather ? <WeatherData weather={weather} /> : null}
    </div>
  )
}
