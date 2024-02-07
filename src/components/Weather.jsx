// Weather.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const apiKey = '2e9e3b50bc4955b328d36f36151a9ef1'; // Replace with your actual API key
    const city = 'Tezpur'; // Replace with the city you want weather information for

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
                );
                setWeatherData(response.data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchData();
    }, [apiKey, city]);
    console.log(weatherData);

    return (
        <div>
            {weatherData ? (
                <div>
                    <h1>Weather in {city}</h1>
                    <p>Temperature: {weatherData.main.temp}°C</p>
                    <p>Description: {weatherData.weather[0].description}</p>
                </div>
            ) : (
                <p>Loading weather data...</p>
            )}
        </div>
    );
};

export default Weather;
