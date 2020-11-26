import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import Papa from 'papaparse'


const App = () => {
  const [ data, setData ] = useState([])

  const url = 'https://cors-anywhere.herokuapp.com/https://warm-coast-62507.herokuapp.com/api/entries'

  useEffect(() => {
    axios
    .get(url)
    .then(r => setData(r.data))
  }, [])


  return (
    <div>
      <p>Hello world</p>
  <ul>{data.map(i => <li key={Math.random(999)}>{i['Province/State'] !== '' ? i['Province/State'] : null} {i['Country/Region']} {i['2/23/20']}</li>)}</ul>
    </div>
  )
}

export default App;
