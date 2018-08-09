import React, {Component} from 'react';
import WeatherItem from './WeatherItem.js'
import { doRequest, dummyData } from '../Utils.js';
import './Weather.css';

class Weather extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      citiesList: {
        'Austin,us': {},
        'New York,us': {},
        'Oakland,us': {},
        'Phoenix,us': {},
      },
    }
  }

  // Weather contains a list of city name which it passes in to WeatherItems
  // WeatherItems take a city name and make an api call to retreive that cities data
  render() {
    return (
      <div style={{backgroundColor: '#e9e9e9'}}>
        <h2 style={{margin: '0px', padding:'10px'}}>My weather data feed</h2>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <WeatherItem
            cityName={dummyData.name}
            temperature={dummyData.main.temp}
            description={dummyData.weather[0].description}
            icon={dummyData.weather[0].icon}
            windSpeed={dummyData.wind.speed}

          />
        </div>
      </div>
    );
  }
}

export default Weather;
