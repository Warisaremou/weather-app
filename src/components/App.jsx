import { useState } from 'react'
import '../App.css'
import WeatherResult from './weather_result/WeatherResult'
import WeatherSearch from './weather_search/WeatherSearch'

function App() {

  const [countryDetails, setCountryDetails] = useState({})
  const [loader, setLoader] = useState(false)

  return (
    <div className='app-bg'>
      <div className={`loader ${!loader ? 'hidden' : null}`}>
        <span className="lettre">L</span>
        <span className="lettre">O</span>
        <span className="lettre">A</span>
        <span className="lettre">D</span>
        <span className="lettre">I</span>
        <span className="lettre">N</span>
        <span className="lettre">G</span>
      </div>
      <WeatherResult
        countryDetails={countryDetails}
        setCountryDetails={setCountryDetails}
      />
      <WeatherSearch
        countryDetails={countryDetails}
        setCountryDetails={setCountryDetails}
        loader={loader}
        setLoader={setLoader}
      />
    </div>
  );
}

export default App;
