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

  // http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
  componentDidMount(){
    const APIKEY = '892d32a9ba54f35f38773b0889e86ecd';
    let data = {};
    let url = '';
    for (const key of Object.keys(this.state.citiesList).sort()) {
      url = 'api.openweathermap.org/data/2.5/weather?q='+key+'&APPID='+APIKEY;
      data = doRequest('GET', url);
      if (data.result !== undefined) {
        console.log('result:', data.result);
      } else {
        console.log('error:', data.error);
      }
    }
  }

  render() {
    return (
      <div>
        <WeatherItem
          cityName={dummyData.name}
          temperature={dummyData.main.temp}
          description={dummyData.weather[0].description}
          icon={dummyData.weather[0].icon}
          windSpeed={dummyData.wind.speed}
        />
      </div>
    );
  }
}

export default Weather;
