import React from 'react';
import { Route, Link, NavLink } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'

const App = () => (
  <div>
    <header>
      <Link to="/" className='links'>Home</Link>
      <Link to="/about-us"  className='links'>About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App