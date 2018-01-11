import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import '../styles/bootstrap.min.css'
import '../styles/NameWin.css'

export const NameWin = props => (
  <div className="name-block">
    <p>Ваше имя:</p>
    <input type="text" placeholder="Имя"/>
    <button className = "btn btn-default">Сохранить</button>
  </div>
)

export default NameWin;
