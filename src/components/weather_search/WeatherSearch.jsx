import React from 'react'
import { useState } from 'react'
import './weatherSearch.css'
import searchIcon from '../../assets/search.svg'

function WeatherSearch({ countryDetails, setCountryDetails, loader, setLoader }) {

    const apiKey = '32ebb4b35f6eb0f1f526e2e9c5010e51'
    let api

    const [inputValue, setInputValue] = useState('')
    const [recentCountry, setRecentCountry] = useState([])

    function keyPressed(e) {
        if (e.keyCode === 13) {
            requestApi(inputValue)
            setLoader(true)
            setInputValue('')
        }
    }

    function requestApi(city) {
        api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        searchWeather()
    }

    function getGeolocation() {
        navigator.geolocation ? navigator.geolocation.getCurrentPosition(onSuccess, onError)
            : console.log("Your browser not support geolocation api")
    }

    function onSuccess(position) {
        const { latitude, longitude } = position.coords
        api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=your_api_key`
        searchWeather()
    }

    function onError(error) {
        console.log(error.message)
    }

    function searchWeather() {
        fetch(api)
            .then(
                response => response.json()
            ).then(
                result => weatherDetails(result)
            )
    }

    function weatherDetails(cityName) {
        // console.log(cityName)
        setLoader(false)
        if (cityName.cod === "404") {
            alert("Error invalide city name !")
        } else {
            setRecentCountry(currentValue => [...currentValue, inputValue])
            setCountryDetails(cityName)
        }
    }

    return (
        <div id="weather-search">
            <input type="text" value={inputValue} id="country"
                placeholder='Enter country name' onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={keyPressed}
            />
            <div className="search-icon">
                <img src={searchIcon} alt="search-icon" onClick={() => getGeolocation()} />
            </div>

            <div className="recent-searches">
                <h5>Recent searches</h5>
                <div className="searches-list">
                    {recentCountry.map((countryName, index) => (
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
                    <p>{`${countryDetails.clouds ? countryDetails.clouds.all : 0}%`}</p>
                </div>
                <div className="detail">
                    <h4>Humidity</h4>
                    <p>{`${countryDetails.main ? countryDetails.main.humidity : 0}%`}</p>
                </div>
                <div className="detail">
                    <h4>Wind</h4>
                    <p>{`${countryDetails.wind ? countryDetails.wind.speed : 0}km/h`}</p>
                </div>
                <div className="detail">
                    <h4>Rain</h4>
                    <p>{`${countryDetails.rain ? countryDetails.rain['1h'] : 0}mm`}</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherSearch