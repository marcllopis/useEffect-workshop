import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';



function App() {
  const [text] = useState('Hello world from state')
  let [starCharacter, setCharacter] = useState({})
  let [weather, setWeather] = useState({})


  // const getData = () => {
  //   fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  //     .then(response => response.json())
  //     .then(data => setCharacter(data))
  // }

  // useEffect(() => {
  //   fetch('https://swapi.dev/api/people')
  //     .then(response => response.json())
  //     .then(data => setCharacter(data.results))
  // }, [])

  // useEffect(() => {
  //   fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=Barcelona&appid=${process.env.REACT_APP_APIKEY}`)
  //     .then(response => response.json())
  //     .then(data => setWeather(data))
  // }, [])

  useEffect(() => {
    axios('https://swapi.dev/api/people')
      .then(response => setCharacter(response.data.results))
    // fetch('https://swapi.dev/api/people')
    //   .then(response => response.json())
    //   .then(data => setCharacter(data.results))
  }, [])

  return (
    <div className="App">
      <h1>{text}</h1>
      {/* <button onClick={getData}>Give me data</button> */}
      {/* {
        starCharacter.length > 0 &&
        <div className='main-container'>
          {
            starCharacter.map(char => (
              <div className='chars-container'>
                <h3>{char.name}</h3>
                <h4>Is a {char.gender}. {char.height} cm tall, with a beatiful {char.hair_color} and amazing {char.eye_color}</h4>
                <button>Meet!</button>
              </div>
            ))
          }
        </div>
      } */}
      <h2>The weather in {weather.name}</h2>
    </div>
  );
}

export default App;
