import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom'
import Home from '../components/Home'
import Rooms from '../components/Rooms.js'
import EnglishRoom from '../components/Rooms/EnglishRoom'
import BigRoom from '../components/Rooms/BigRoom'
import PeavyRoom from '../components/Rooms/PeavyRoom'
import Schedule from '../components/Schedule'
import Contacts from '../components/Contacts'
import NameWin from '../components/NameWin'

import logo from '../images/Repbase.png'

import "../styles/App.css"

const App = () => (
  <div>
    <header>
      <div className="logo">
        <Link to="/"><img src={logo} alt="LOGO"/></Link>
      </div>

      <NameWin />

      <ul className="menu">
        <li>
          <Link to="/rooms">Залы</Link>
          <ul>
            <li><Link to="/rooms/english"><span>Английский зал</span></Link></li>
            <li><Link to="/rooms/big"><span>Большой зал</span></Link></li>
            <li><Link to="/rooms/peavy"><span>Peavy зал</span></Link></li>
          </ul>
        </li>
        <li>
          <Link to="/schedule">Расписание</Link>
        </li>
        <li>
          <Link to="/contacts">Контакты</Link>
        </li>
      </ul>
    </header>

    <main>
      <Route exact path="/" component={Home}/>
      <Route exact path="/rooms" component={Rooms}/>
      <Route exact path="/rooms/english" component={EnglishRoom}/>
      <Route exact path="/rooms/big"  component={BigRoom}/>
      <Route exact path="/rooms/peavy" component={PeavyRoom}/>
      <Route exact path="/schedule" component={Schedule}/>
      <Route exact path="/contacts" component={Contacts}/>
    </main>

    <footer>
    </footer>
  </div>
)

export default App;
