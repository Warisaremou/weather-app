import React from 'react'
import weatherIcon from '../../assets/sun.svg'
import './weatherResult.css'

function WeatherResult({ countryDetails, setCountryDetails }) {

    const imgUrl = `http://openweathermap.org/img/w/${countryDetails.weather ? countryDetails.weather[0].icon : null}.png`

    function setDate(dt) {
        var day = new Date(dt * 1000)
        return day.toUTCString()
    }

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
                    <p>{countryDetails.dt ? setDate(countryDetails.dt) : "Tue,19 Dec 2022 05:06:52 GMT" }</p>
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