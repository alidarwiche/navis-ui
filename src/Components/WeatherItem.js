import React, {Component} from 'react';
import { doRequest, isObjectEmpty } from '../Utils.js';
import './WeatherItem.css';

class WeatherItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherData: {},
    }
  }

  // http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
  componentDidMount(){
    const APIKEY = '892d32a9ba54f35f38773b0889e86ecd';
    let data = {};
    let url = 'https://api.openweathermap.org/data/2.5/weather?q='+this.props.cityName+'&units=imperial&APPID='+APIKEY;
    // let url = 'https://api.openweathermap.org/data/2.5/weather?q='+'Austin,us'+'&units=imperial&APPID='+APIKEY;
    doRequest('GET', url)
      .then((data) => {
        this.setState({
          weatherData: data,
        });
    })
  }

  // City Name
  // Temperature
  // Weather description
  // Icon
  // Wind Speed
  render() {
    const data = this.state.weatherData;
    if (isObjectEmpty(data)) {
      return (<div></div>);
    } else {
      return(
        <div style={{backgroundColor: 'white', display: 'inline-block', margin: '10px'}}>
          <p>{data.name}</p>
          <p style={{fontSize: '40px', margin: '0px'}}>{data.main.temp}˚F</p>
          <div style={{display: 'flex'}}>
            <img src={'http://openweathermap.org/img/w/'+data.weather[0].icon+'.png'} alt=''/>
            <p>{data.weather[0].description}</p>
          </div>
          <div style={{display: 'flex'}}>
            <p><span>Wind Speed:</span> {data.wind.speed} mph</p>
          </div>
        </div>
      );
    }
  }
}

export default WeatherItem;
