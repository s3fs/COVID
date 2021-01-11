import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from './components/Card'

const App = () => {
  const [ data, setData ] = useState([])
  let fKey = 0

  const url = 'https://cors-anywhere.herokuapp.com/https://warm-coast-62507.herokuapp.com/api/entries'

  useEffect(() => {
    console.log('fetching data...')
    axios
    .get(url)
    .then(r => setData(r.data))
    .then(() => console.log('data fetched and set.'))
    .catch(e => console.log(e, 'err fetching'))
  }, [])

  return (
    <div>
      <section className={'header'}>
        <p>Hello world</p>
        <input type={'search'} placeholder={'ass'}></input>
      </section>
      <ul className={'noteContainer'}>{data.map(i => <Card key={fKey += 1} i={i}/>)}</ul>
    </div>
  )
}

export default App;
