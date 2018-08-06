import React, {Component} from 'react';
import './WeatherItem.css';

class WeatherItem extends Component {
  constructor(props) {
    super(props);
  }

  // City Name
  // Temperature
  // Weather description
  // Icon
  // Wind Speed
  render() {
    return(
      <div>
        <p>{this.props.cityName}</p>
        <p>{this.props.temperature}</p>
        <p>{this.props.description}</p>
        <img src={'http://openweathermap.org/img/w/'+this.props.icon+'.png'} alt=''/>
        <p>{this.props.windSpeed}</p>
      </div>
    );
  }
}

export default WeatherItem;
