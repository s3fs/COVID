import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import Papa from 'papaparse'


const App = () => {
  const [ data, setData ] = useState([])
  const [ obj, setNewObj ] = useState({})
  const [ dateArr, setDateArr ] = useState([])

  const url = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv'

  useEffect(() => {
    axios
    .get(url)
    .then(r => {
      const result = Papa.parse(r.data, { 
        header: true 
      })
      setData(result.data)

      const aData = data[0]
      console.log('aData', aData)
      for (let [key, val] of Object.entries(aData)) {
        const date = new Date()
        let year = date.getFullYear()
        year = year.toString()
        year = year.slice(year.length - 2, year.length)

        const dateCheck = new RegExp(`${date.getMonth() + 1}/${date.getDate()}/${year}`)
        console.log('dateCheck', dateCheck)
        if (dateCheck.test(key)) {
          console.log(key, val)
        }
     
      }
    })
  }, [])
  


  return (
    <div>
      <p>Hello world</p>
      <ul>{data.map(i => <li key={Math.random(999)}>{i['Country/Region']} {i['2/23/20']}</li>)}</ul>
    </div>
  )
}

export default App;

/*
axios
    .get('https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv')
    .then(r => {
      console.log('r', r)
      setData(Papa.parse(r))
    })
*/
