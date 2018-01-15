import React from 'react'

import mainPic from '../../images/Rooms/eng_room.jpg'

import '../../styles/Rooms.css'

const EnglishRoom = props => (
	<div className="room-desc">
    <h1>Английский зал</h1>

    <img src={mainPic} alt="Main pic" />
    <div>
    	<h3> Оборудование </h3>
    	<ul>
			  <li><p>MARSHALL JCM900 4100-E 100W DUAL REVERB + Гитарный кабинет MARSHALL 4x12" 200Вт</p></li>
			  <li><p>MARSHALL VALVESTATE 8100 VS100 + Гитарный кабинет MARSHALL Celestion 4x12" 200Вт</p></li>
			  <li><p>Ampeg SVT6Pro + бас кабинет Ashdown MAG 410T 450 Вт</p></li>
			  <li><p>Двухбочечная барабанная установка TAMA</p></li>
			  <li><p>Акустическая система Peavey</p></li>
			</ul>
			<p>
				"Английский зал" - Уникальный в своем роде зал оснащенный специально подобранным оригинальным 
				ламповым аппаратом Marshall. Легендарное звучание Marshall стало основой гитарного звука многих 
				выдающихся коллективов. Marshall JCM900 4100 - усилитель гитаристов таких групп как Morbid Angel, 
				Motorhead, Red Hot Chili Peppers, ZZ Top, Papa Roach, Def Leppard и др. Легендарный усилитель Marshall 
				Valvestate 8100 ставший основой звука таких коллективов как Death, Meshuggah, White Zombie и др. 
				Профессиональный бас гитарный усилитель Ampeg SVT6Pro звучание которого легло в основу таких музыкантов 
				как Tom Hamilton (Aerosmith), Justin Meldal-Johnsen (Beck/Ima Robot), или Garry Beers из INXS. &nbsp;
			</p>
    </div>
  </div>
)

export default EnglishRoom