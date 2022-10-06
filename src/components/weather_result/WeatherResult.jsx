import React from 'react'
import weatherIcon from '../../assets/sun.svg'
import './weatherResult.css'

function WeatherResult({ countryDetails, setCountryDetails }) {

    const imgUrl = `http://openweathermap.org/img/w/${countryDetails.weather ? countryDetails.weather[0].icon : null}.png`

    return (
        <div id="weather-result">
            <div className="weather-logo">
                <h4>the.weather</h4>
                <img src={weatherIcon} alt="logo" />
            </div>
            <div className="results">
                <p>{`${countryDetails.wind ? `${countryDetails.wind.deg}` : 0}%`}</p>
                <div className="other-details">
                    <h3>{countryDetails.name ? countryDetails.name : "-"}</h3>
                    <p>10:36 - Tuesday,Oct'19</p>
                </div>
                <div className="weather-icon">
                    <img src={imgUrl} alt="icon" width="40px" height="40px" />
                    <p>{countryDetails.weather ? countryDetails.weather[0].main : "-"}</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherResult