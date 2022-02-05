import { useState } from 'react';
import './App.css';
import constants from './constants';
import useAlan from './hooks/useAlan';
import WeatherData from './WeatherData';


function App() {
  const [place,setPlace]=useState('')
  const [weatherData,setWeatherData]=useState();

  useAlan({fetchWeather});

  const handleChange=(e)=>{
    setPlace(e.target.value)
  }

  async function fetchWeather(place){
    let PLACE_URL=`${constants.BASE_URL}${constants.GET_PLACE_DATA_ENDPOINT}${place}`
    const placeResponse=await fetch(PLACE_URL);
    const placeData=await placeResponse.json();
    if(placeData.length) {
      let weatherURL=`${constants.BASE_URL}${placeData[0].woeid}/`;
      const weatherResponse=await fetch(weatherURL);
      const _weatherData=await weatherResponse.json();
      setWeatherData(_weatherData)
      return _weatherData;
    }
  }

  const getWeather=async()=>{
    fetchWeather(place)
  }

  return (
    <div className="App">
      <h3>Type in the name of your place to get instant weather updates!</h3>
      <div className='container'> 
        <div>
          <span>🔍</span>
          <input value={place} onChange={handleChange} type="text" />
        </div>
        <button onClick={getWeather}>Get Weather!</button>
      </div>
      { weatherData && <WeatherData weatherData={weatherData} /> }    
    </div>
  );
}

export default App;
