import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types';
import './styles.css';

const icons = {
    cloud: "cloud",
    sun: "sun",
    rain: "cloud-rain",
    snow: "snowflake",
    windy: "wind"
}

const sizeIcon = "2x";

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if (icon) {
        return <FontAwesomeIcon className="wicon" icon={icon} size={sizeIcon} />
    } else {
        return <FontAwesomeIcon className="wicon" icon="sun" size={sizeIcon} />
    }
};

const WeatherTemperature = ({ temperature, weatherState }) => (
    <div className="weatherTemperature">
        {getWeatherIcon(weatherState)}
        <span className="temperature">{temperature} </span>
        <span className="temperatureType">ºC</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature;