import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import Card from './components/Card'
import Screen from './components/Screen'

const App = () => {
  const [ data, setData ] = useState([])
  const [ query, setQuery ] = useState('')

  let fKey = 0

  const url = 'https://warm-coast-62507.herokuapp.com/api/entries'

  const inputChange = (e) => {
    setQuery(e.target.value)
  }

  useEffect(() => {
    console.log('fetching data...')
    axios
    .get(url)
    .then(r => setData(r.data))
    .then(() => console.log('data fetched and set.'))
    .catch(e => console.log(e, 'err fetching'))
  }, [])

  if (data.length === 0) {
    return (
      <Screen />
    )
  } else {
    const entriesToShow = query === '' ? data : data.filter(i => new RegExp(query, 'i').test(i.country))

    return (
      <div>
        <section className={'header'}>
          <p className={'header__title'}>COVID-19 Dashboard</p>
          <input type={'search'} placeholder={'Enter country name here...'} onChange={inputChange}></input>
        </section>
        <ul className={'noteContainer'}>{entriesToShow.map(i => <Card key={fKey += 1} i={i}/>)}</ul>
      </div>
    )
  }
}

export default App;
