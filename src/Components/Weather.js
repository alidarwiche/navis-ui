import React, {Component} from 'react';
import WeatherItem from './WeatherItem.js'
import { doRequest, dummyData } from '../Utils.js';
import './Weather.css';

let keyCounter = 0;

class Weather extends Component {
  constructor(props){
    super(props);

    this.state = {
      citiesList: [
        'Austin',
        'New York',
        'Oakland',
        'Phoenix',
      ],
    }
  }

  // Weather contains a list of city name which it passes in to WeatherItems
  // WeatherItems take a city name and make an api call to retreive that cities data
  render() {
    return (
      <div style={{backgroundColor: '#e9e9e9', padding: '20px'}}>
        <h2 style={{margin: '0px', padding:'10px'}}>My weather data feed</h2>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          { this.state.citiesList.map((city, index) => (
            <WeatherItem key={keyCounter++} cityName={city} />
          ))}
        </div>
      </div>
    );
  }
}

export default Weather;
