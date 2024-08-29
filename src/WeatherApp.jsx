import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './WeatherApp.module.css';
import { FaTemperatureHigh, FaTint, FaCloud } from 'react-icons/fa';

function WeatherApp() {
  const [city, setCity] = useState('Kathmandu');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');
  const [placeholderText, setPlaceholderText] = useState('Search Your City');
  const [currentDateTime, setCurrentDateTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderText((prev) => {
        const nextText = prev === 'Search Your City' ? '' : 'Search Your City';
        return nextText;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetchWeather();
    updateDateTime(); // Update the date and time when the component mounts
    const timer = setInterval(updateDateTime, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup the timer on unmount
  }, []);

  const fetchWeather = async () => {
    const apiKey = "1fb6e2b0bf711f14ed38f79ecbce4f78";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Kathmandu&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeather(response.data);
      setError('');
    } catch (err) {
      setError('Could not fetch weather data for Kathmandu.');
      setWeather(null);
    }
  };

  const handleSearch = async () => {
    if (!city) return;

    const apiKey = "1fb6e2b0bf711f14ed38f79ecbce4f78";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeather(response.data);
      setError('');
    } catch (err) {
      setError('City not found. Please try again.');
      setWeather(null);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  const updateDateTime = () => {
    const now = new Date();
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit', 
      hour12: true 
    };
    setCurrentDateTime(now.toLocaleString('en-US', options));
  };

  return (
    <div className={styles.App}>
      <h1 className={styles.heading}>Check the weather of your city:</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder={placeholderText}
        onKeyDown={handleKeyDown}
        className={styles.input}
      />
      <button onClick={handleSearch} className={styles.button}>
        Get Weather
      </button>

      {error && <p className={styles.error}>{error}</p>}

      {weather && (
        <div className={styles.weatherInfo}>
          <h2 className={styles.weatherInfoHeading}>
            {weather.name} <FaCloud />
          </h2>
          <p className={styles.weatherInfoText}>
            <FaTemperatureHigh /> Temperature: {weather.main.temp} °C
          </p>
          <p className={styles.weatherInfoText}>
            <FaTint /> Humidity: {weather.main.humidity} %
          </p>
          <p className={styles.weatherInfoText}>
            <FaCloud /> Condition: {weather.weather[0].description}
          </p>
          <br /><br />
          <div className={styles.dateTime}>
            <p>{currentDateTime}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;