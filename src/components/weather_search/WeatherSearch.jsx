import React from 'react'
import { useState } from 'react'
import './weatherSearch.css'
import searchIcon from '../../assets/search.svg'

function WeatherSearch() {

    const apiKey = '32ebb4b35f6eb0f1f526e2e9c5010e51'
    // const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

    const [inputValue, setInputValue] = useState('')
    const [country, setCountry] = useState([])

    function keyPressed(e) {
        if (e.keyCode === 13) {
            // console.log(inputValue)
            setCountry(currentValue => [...currentValue, inputValue])
            searchWeather(inputValue)
            setInputValue('')
        }
    }

    function searchWeather(city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
            .then(
                response => response.json()
            ).then(
                result => weatherDetails(result)
            )
    }

    function weatherDetails(cityName) {
        console.log(cityName)

        cityName.cod === '404' ? console.log("Erreur !")
        :(
            console.log(cityName.cod)
        )
    }

    return (
        <div id="weather-search">
            <input type="text" value={inputValue} id="country"
                placeholder='Enter country name' onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={keyPressed}
            />
            <div className="search-icon">
                <img src={searchIcon} alt="search-icon" />
            </div>

            <div className="recent-searches">
                <h5>Recent searches</h5>
                <div className="searches-list">
                    {country.map((countryName, index) => (
                        <p key={`${countryName}-${index}`} >
                            {countryName.charAt(0).toUpperCase() + countryName.slice(1)}
                        </p>
                    ))}
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