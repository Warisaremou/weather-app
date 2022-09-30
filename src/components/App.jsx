import '../App.css'
import WeatherResult from './weather_result/WeatherResult'
import WeatherSearch from './weather_search/WeatherSearch'

function App() {
  return (
    <div className='app-bg'>
      <WeatherResult />
      <WeatherSearch />
    </div>
  );
}

export default App;
