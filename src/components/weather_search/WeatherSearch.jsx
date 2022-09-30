import React from 'react'
import './weatherSearch.css'
import searchIcon from '../../assets/search.svg'

function WeatherSearch() {
    return (
        <div id="weather-search">
            <input type="text" name="country" id="country" placeholder='Enter country name' />
            <div className="search-icon">
                <img src={searchIcon} alt="search-icon" />
            </div>

            <div className="recent-searches">
                <h5>Recent searches</h5>
                <div className="searches-list">
                    <p>London</p>
                    <p>London</p>
                    <p>London</p>
                    <p>London</p>
                    <p>London</p>
                    <p>London</p>
                    <p>London</p>
                    <p>London</p>
                    <p>London</p>
                    <p>London</p>
                </div>
            </div>

            <div className="weather-details">
                <h4>Weather Details</h4>
                <div className="detail">
                    <h4>Cloudy</h4>
                    <p>12%</p>
                </div>
                <div className="detail">
                    <h4>Humidity</h4>
                    <p>78%</p>
                </div>
                <div className="detail">
                    <h4>Wind</h4>
                    <p>1km/h</p>
                </div>
                <div className="detail">
                    <h4>Rain</h4>
                    <p>0mm</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherSearch