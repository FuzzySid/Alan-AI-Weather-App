import {useEffect, useRef} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';


export default function useAlan({fetchWeather}){
    const alanBtnInstance = useRef(null);

    const getWeather=async(location)=>{
        const weather=await fetchWeather(location)
        alanBtnInstance.current.setVisualState({data: weather});
        alanBtnInstance.current.playText(`
            It's ${weather.consolidated_weather[0].the_temp} degrees celcius in 
            ${location} and expected ${weather.consolidated_weather[0].weather_state_name}
        `)
    }

    useEffect(()=>{
        if (!alanBtnInstance.current) {
            alanBtnInstance.current = alanBtn({
                key:'',
                onCommand:async(data)=>{
                    if(data.location) getWeather(data.location) 
                },
            })
        }

    },[])

    return null;
}