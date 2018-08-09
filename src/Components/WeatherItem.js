import React, {Component} from 'react';
import { doRequest } from '../Utils.js';
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
    // let url = 'api.openweathermap.org/data/2.5/weather?q='+this.props.cityName+'&units=imperial&APPID='+APIKEY;
    let url = 'https://api.openweathermap.org/data/2.5/weather?q='+'Austin,us'+'&units=imperial&APPID='+APIKEY;
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
    return(
      <div style={{backgroundColor: 'white', display: 'inline-block'}}>
        <p>{this.props.cityName}</p>
        <p style={{fontSize: '40px', margin: '0px'}}>{this.props.temperature}˚F</p>
        <div style={{display: 'flex'}}>
          <img src={'http://openweathermap.org/img/w/'+this.props.icon+'.png'} alt=''/>
          <p>{this.props.description}</p>
        </div>
        <div style={{display: 'flex'}}>
          <p><span>Wind Speed:</span> {this.props.windSpeed} mph</p>
        </div>
      </div>
    );
  }
}

export default WeatherItem;
