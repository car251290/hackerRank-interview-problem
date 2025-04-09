import axios from 'axios';
import { BASE_URL } from './config'; // Assuming BASE_URL is imported from a config file

async function cityWeather(city) {
  // Validate the city parameter
  if (typeof city !== 'string') {
    throw new Error('not a string');
  }
  if (city.trim() === '') {
    throw new Error('string is empty');
  }

  // Construct the URL
  const url = `${BASE_URL}&q=${encodeURIComponent(city)}`;

  try {
    // Fetch data from the mocked API
    const response = await axios.get(url);

    // Extract the main property from the response
    const { main } = response.data;

    // Return the formatted weather object
    return {
      temp: main.temp,
      feels_like: main.feels_like,
      temp_min: main.temp_min,
      temp_max: main.temp_max,
      pressure: main.pressure,
      humidity: main.humidity,
    };
  } catch (error) {
    // Handle errors (e.g., network issues or invalid city)
    throw new Error('Failed to fetch weather data');
  }
}

export default cityWeather;