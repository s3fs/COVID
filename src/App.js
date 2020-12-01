import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'

const App = () => {
  const [ data, setData ] = useState([])


  const url = 'https://cors-anywhere.herokuapp.com/https://warm-coast-62507.herokuapp.com/api/entries'

  useEffect(() => {
    console.log('useeff in use')
    axios
    .get(url)
    .then(r => setData(r.data))
  }, [])

  return (
    <div>
      <p>Hello world</p>
      <ul>{data.map(i => <li key={Math.random(999)}>{i['province'] !== '' ? i['province'] : null} {i['country']} {i.cases.map(i => Object.entries(i).map(([ key, val ]) => <span>{key}, <b>{val}</b> </span>))}</li>)}</ul>
    </div>
  )
}

export default App;
