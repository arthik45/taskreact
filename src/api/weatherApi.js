import axios from "axios";

const API_KEY = "YOUR_API_KEY"; // Replace with your actual OpenWeather API Key
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

// Function to fetch weather data
export const getWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
