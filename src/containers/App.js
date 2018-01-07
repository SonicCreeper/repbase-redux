import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom'

import "../styles/App.css"

const App = () => (
  <div>
    <header>
      <div className="logo">
        <Link to="/"><img src="" alt=" " height="300" width="600"/></Link>
      </div>

      <ul className="menu">
        <li>
          <Link to="/rooms">Залы</Link>
          <ul>
            <li><Link to="/rooms/english">Английский зал</Link></li>
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
      <Route exact path="/" />
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
