import React, {Component} from 'react';
import { doRequest, isObjectEmpty, JSClock } from '../Utils.js';
import './WeatherItem.css';

class WeatherItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherData: {},
    }
  }

  componentDidMount(){
    const APIKEY = '892d32a9ba54f35f38773b0889e86ecd';
    let data = {};
    let url = 'https://api.openweathermap.org/data/2.5/weather?q='+this.props.cityName+'&units=imperial&APPID='+APIKEY;
    doRequest('GET', url)
      .then((data) => {
        this.setState({
          weatherData: data,
        });
    })
  }

  render() {
    const data = this.state.weatherData;
    if (isObjectEmpty(data)) {
      return (<div></div>);
    } else {
      // const sunrise = JSClock(new Date(data.sys.sunrise));
      // const sunset = JSClock(new Date(data.sys.sunset));
      return(
        <div style={{display: 'flex', justifyContent: 'center', margin: '0px 10px', border: '2px solid #ccc', borderRadius: '4px', minWidth: '200px', backgroundColor: 'white'}}>
          {/* <div style={{textAlign: 'right', paddingTop: '50px'}}>
            <p>Sunrise: {sunrise}</p>
            <p>Sunset: {sunset}</p>
            <p>Huminity: {data.main.humidity}%</p>
          </div> */}
          <div style={{ display: 'inline-block', padding: '0px 30px'}}>
            <p>{data.name}, {data.sys.country}</p>
            <p style={{fontSize: '40px', margin: '0px'}}>{data.main.temp}˚F</p>
            <div style={{display: 'flex'}}>
              <img src={'http://openweathermap.org/img/w/'+data.weather[0].icon+'.png'} alt=''/>
              <p>{data.weather[0].description}</p>
            </div>
            <p style={{marginTop: '0px'}}>Clouds: {data.clouds.all}%</p>
          </div>
          {/* <div style={{textAlign: 'left', paddingTop: '50px'}}>
            <p>High: {data.main.temp_min}˚F</p>
            <p>Low: {data.main.temp_max}˚F</p>
            <p>Wind: {data.wind.speed} mph</p>
          </div> */}
        </div>
      );
    }
  }
}

export default WeatherItem;
