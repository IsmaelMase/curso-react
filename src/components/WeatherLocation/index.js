import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
// import PropTypes from 'prop-types';
import './style.css';

const data = {
    temperature: 5,
    weatherState: 'sun',
    humidity: 10,
    wind: '10 m/s'
}

const data2 = {
    temperature: 15,
    weatherState: 'cloud',
    humidity: 15,
    wind: '20 m/s'
}
class WeatherLocation extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Sevilla',
            data: data
        }
    }

    handleUpdateClick = () => {
        this.setState({ city: 'Sevilla', data: data2 });
    }

    render() {
        const { city, data } = this.state;
        return (
            <div className="weatherLocation">
                <Location city={city} />
                <WeatherData data={data} />
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }

};

export default WeatherLocation;