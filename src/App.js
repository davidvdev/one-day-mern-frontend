import React, {useState, useEffect} from 'react'
// import './App.css';
import './App.sass'
import {Route, Link, Switch} from 'react-router-dom'

import Body from './components/Body'
import Form from './components/Form';
import Filter from './components/Filter'

function App() {

  const url="https://one-day-mern-dv.herokuapp.com"
  const [weapons, setWeapons] = useState([])
  const [filterView, setFilterView] = useState([])

  const getWeapons = () => {
    fetch(url + '/swnweapons')
    .then((response) => response.json())
    .then((data) => { 
      setWeapons(data.data)
      setFilterView(data.data)
    })
  }

  const filter = (search) => {
    let searchReturn = []
    if(search === "" || search === []){
      searchReturn = weapons
    } else {
      weapons.forEach((weapon) => {
        let alteredSearch = search.toLowerCase()
        let searchable = weapon.name.toLowerCase()

        if(searchable.includes(alteredSearch) === true){
          searchReturn = [...searchReturn, weapon]
        }
        return searchReturn
      })
    }
    setFilterView(searchReturn)
  }

  const emptyWeapon = 
    {
      "type": "",
      "name": "",
      "damage": "",
      "shock":  "",
      "range": "",
      "magazine": 0,
      "attribute": "",
      "cost": 0,
      "encumberance": 0,
      "TL": 0,
      "suppress": false,
      "description": ""  
    }
  

  const [selectedWeapon, setSelectedWeapon] = useState(emptyWeapon)
  const selectWeapon = (selected) => {
    setSelectedWeapon(selected)
  }

  const variantWeapon = (selected) => {
    setSelectedWeapon({
      "type": selected.type,
      "name": selected.name,
      "damage": selected.damage,
      "shock":  selected.shock,
      "range": selected.range,
      "magazine": selected.magazine,
      "attribute": selected.attribute,
      "cost": selected.cost,
      "encumberance": selected.encumberance,
      "TL": selected.TL,
      "suppress": selected.suppress,
      "description": selected.description  
    })
  }

  const handleUpdate = (selected) => {
    fetch(url + '/swnweapons/' + selected._id, {
      method: "put",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(selected)
    })
    .then(() => getWeapons())
  }

  const createWeapon = (newWeapon) => {
    fetch(url + '/swnweapons', {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newWeapon)
    })
    .then(() => getWeapons())
  }

  const deleteWeapon = (weapon) => {
    fetch(url + '/swnweapons/' + weapon._id, {
      method: 'delete'
    })
    .then(() => getWeapons())
  }

  useEffect(() => {getWeapons()},[])

  return (
    <div className="App">
      <header>
        <h1>Stars Without Number</h1>
        <h2>unofficial item catalogue</h2>
      <Link to="/create">
        <button onClick={() => setSelectedWeapon(emptyWeapon)}>Add Weapon</button>
      </Link>
      <Filter filter={filter}/>
      </header>
      <main>
        <Switch>
          <Route
            exact path="/"
            render={(rp) => (<Body {...rp} weapons={filterView} selectWeapon={selectWeapon} selected={selectedWeapon} variantWeapon={variantWeapon} deleteWeapon={deleteWeapon}/>)}
          />
          <Route 
            exact path="/edit"
            render={(rp) => (<Form {...rp} selected={selectedWeapon} label="submit edits" handleSubmit={handleUpdate}/>)}
          />
          <Route 
            exact path ="/create"
            render={(rp) => (<Form {...rp} selected={selectedWeapon} label="create weapon" handleSubmit={createWeapon}/>)}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
