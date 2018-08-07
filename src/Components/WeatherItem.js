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
