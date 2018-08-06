import React, {Component} from 'react';
import { doRequest, dummyData } from '../Utils.js';
import './Weather.css';

class Weather extends Component {
  constructor(props){
    super(props);

    this.setState({
      citiesList: [
        'Austin,us',
        'Oakland,us',
        'New York,us',
        'Phoenix,us',
      ],
    });
  }
  // http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
  componentDidMount(){
    // const APIKEY = '892d32a9ba54f35f38773b0889e86ecd';
    // let data = doRequest('GET', 'api.openweathermap.org/data/2.5/weather?q='+this.state.citiesList[0]+'&APPID='+APIKEY);
    console.log(dummyData);
    // if (data.error === undefined) {
    //
    // } else {
    //   // this.state.citiesList.push(data.result);
    // }
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default Weather;
