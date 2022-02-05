import constants from "./constants"

export default function WeatherData({weatherData}){
    return(
        <div className="weather-container">
            <div className="main">
                <img src={`${constants.IMG_URL}${weatherData.consolidated_weather[0].weather_state_abbr}.svg`} />
                <p>
                    It's <span>{weatherData.consolidated_weather[0].the_temp} &#8451; </span>
                    predicted <span>{weatherData.consolidated_weather[0].weather_state_name}</span>
                </p>
            </div>
            <div className="header">
                <span>
                    <strong>Place:</strong> {weatherData.title}, {weatherData.parent.title}
                </span>
                <span>
                    <strong>Timezone:</strong> {weatherData.timezone}
                </span>
            </div>
            <div className="weather-info">
                <p>
                   <strong> Minimum Temperature: </strong> 
                   <span>
                       {weatherData.consolidated_weather[0].min_temp.toString().slice(0,5)} 
                       &#8451;
                    </span>
                </p>
                <p>
                   <strong>Maximum Temperature: </strong> 
                   <span>
                       {weatherData.consolidated_weather[0].max_temp.toString().slice(0,5)}
                       &#8451;
                    </span>
                </p>
            </div>
        </div>
    )
}