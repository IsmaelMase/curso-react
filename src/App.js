import React, { Component } from 'react';
import WeatherLocation from './components/WeatherLocation';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud, faSun, faCloudRain, faSnowflake, faWind } from '@fortawesome/free-solid-svg-icons'
library.add(faCloud, faSun, faCloudRain, faSnowflake, faWind)

class App extends Component {
  render() {
    return (
      <div className="App">
        Weather App (Aplicacion del clima)
       <WeatherLocation></WeatherLocation>
      </div>
    );
  }
}

export default App;
