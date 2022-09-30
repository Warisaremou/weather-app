import React from 'react'
import weatherIcon from '../../assets/sun.svg'
import './weatherResult.css'

function WeatherResult() {
    return (
        <div id="weather-result">
            <h4>the.weather</h4>
            <div className="results">
                <p>26°</p>
                <div className="other-details">
                    <h3>London</h3>
                    <p>10:36 - Tuesday,Oct'19</p>
                </div>
                <div className="weather-icon">
                    <img src={weatherIcon} alt="weather-icon" />
                    <p>Sunny</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherResult