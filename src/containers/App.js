import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom'
import Home from '../components/Home'

import logo from '../images/Repbase.png'

import "../styles/App.css"

const App = () => (
  <div>
    <header>
      <div className="logo">
        <Link to="/"><img src={logo} alt="LOGO"/></Link>
      </div>

      <ul className="menu">
        <li>
          <Link to="/rooms">Залы</Link>
          <ul>
            <li><Link to="/rooms/english"><span>Английский зал</span></Link></li>
            <li><Link to="/rooms/big">Большой зал</Link></li>
            <li><Link to="/rooms/peavy">Peavy зал</Link></li>
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
      <Route exact path="/rooms" />
      <Route exact path="/rooms/english" />
      <Route exact path="/rooms/big" />
      <Route exact path="/rooms/peavy" />
      <Route exact path="/schedule" />
      <Route exact path="/contacts" />
    </main>

    <footer>
    </footer>
  </div>
)

export default App;
