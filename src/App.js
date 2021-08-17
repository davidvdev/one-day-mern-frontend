import React, {useState, useEffect} from 'react'
import './App.css';
import {Route, Link, Switch} from 'react-router-dom'

import Body from './components/Body'

function App() {

  const url="https://one-day-mern-dv.herokuapp.com"
  const [weapons, setWeapons] = useState([])

  const getWeapons = () => {
    fetch(url + '/swnweapons')
    .then((response) => response.json())
    .then((data) => setWeapons(data.data))
  }

  useEffect(() => {getWeapons()},[])

  return (
    <div className="App">
      <header>
        <h1>Stars Without Number</h1>
        <h2>unofficial item catalogue</h2>
      </header>
      <main>
        <Switch>
          <Route
            exact path="/"
            render={(rp) => (<Body {...rp} weapons={weapons} />)}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
