import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../redux/weatherSlice";

const Weather = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(fetchWeather("New York")); // Change to any city
  }, [dispatch]);

  return (
    <div className="weather-info">
      <h3>Weather:</h3>
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" && (
        <p>{data?.weather[0]?.description}, {data?.main?.temp}°C</p>
      )}
      {status === "failed" && <p>Failed to load weather</p>}
    </div>
  );
};

export default Weather;

