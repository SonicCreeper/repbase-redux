import React from 'react'
import { Link } from 'react-router-dom'

const Rooms = props => (
  <div>
  	<h1>Наши залы</h1>
    <ul>
      <li><Link to="/rooms/english"><span>Английский зал</span></Link></li>
      <li><Link to="/rooms/big">Большой зал</Link></li>
      <li><Link to="/rooms/peavy">Peavy зал</Link></li>
    </ul>
  </div>
)

export default Rooms