import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/googleMap';

class WeatherList extends Component{
    renderWeatherList(cityData){
        const name = cityData.city.name;
        const temp = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const {lat, lon} = cityData.city.coord; 
        return (
            <tr key={name}>
                <td><GoogleMap lat={lat} lon={lon} /></td>
                {/*<td>{name}</td>*/}
                <td>
                    <Chart data={temp} color='orange' units='K'/>
                </td>
                <td>
                    <Chart data={pressure} color='green' units='hPa'/>
                </td>
                <td>
                    <Chart data={humidity} color='blue' units='%'/>
                </td>
            </tr>
        );
    }
    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeatherList)}
                </tbody>
            </table>
        );
    }
}

// function mapStateToProps(state){
//     return { weather: state.weather };
// }
// We can rewrite above function as belo with ES6

function mapStateToProps({weather}){
    console.log(weather);
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);