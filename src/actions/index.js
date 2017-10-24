// axios is library used to made AJAX request easy.
// https://www.npmjs.com/package/axios
import axios from 'axios';

// sign up in https://openweathermap.org/forecast5 and we can use weather forcast API.
// Here we are using weather forcast by city name.

const API_KEY = 'aa7c0006c074e77ab39c4190e438a3a5';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);
    console.log(request);
    return {
        type: FETCH_WEATHER,
        payload: request

    }
}