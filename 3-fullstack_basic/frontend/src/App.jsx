import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes,setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })

      .catch((error) => {
        console.log(error);
      })
  })
  return (
    <>
      <div>
        <h1>Basic full stack </h1>
        <p>JOKES: {jokes.length} </p>

        {jokes.map((joke, index) => (
          <div key={joke.rollNo}>
            <h3>{joke.name}</h3>
            <p>{joke.class}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
