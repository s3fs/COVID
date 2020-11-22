import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'

const App = () => {
  const [ data, setData ] = useState([])

  useEffect(() => {
    axios
    .get('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv')
    .then(r => setData(r))
  }, [])

  return (
    <div>
      <p>Hello world</p>
      <p>{console.log(data)}</p>
    </div>
  )
}

export default App;
