import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/bootstrap.min.css'
import '../styles/NameWin.css'

export const NameWin = props => {
	if(props.isNameSet) {
		return (
			<div className="name-block">
				Привет, {props.name}!
			</div>
		)
	}

	return (
	  <div className="name-block">
		  <div>
		    <p>Ваше имя:</p>
		    <input type="text" placeholder="Имя" className="inputName"/><br/>
		    <button className = "btn btn-default" onClick={()=>props.setName(document.querySelector(".inputName").value)}>Сохранить</button>
		  </div>
	  </div>
	)
}

export default NameWin
