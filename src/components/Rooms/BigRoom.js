import React from 'react'

import mainPic from '../../images/Rooms/big_room.jpg'

import '../../styles/Rooms.css'

const BigRoom = props => (
  <div className="room-desc">
    <h1>Большой зал</h1>

    <img src={mainPic} alt="Main pic" />
    <div>
    	<h3> Оборудование </h3>
    	<ul>
			  <li><p>BLACKSTAR ONE 100 + Гитарный кабинет MARSHALL 4x12" 200Вт</p></li>
			  <li><p>HUGHES &amp; KETTNER WARP T + Гитарный кабинет MARSHALL Celestion 4x12"</p></li>
			  <li><p>AMPEG SVT3 PRO &nbsp;+ Басс кабинет Ampeg 4x10'' мощность 400 Вт</p></li>
			  <li><p>Двухбочечная барабанная установка Yamaha</p></li>
			  <li><p>Акустическая система JBL</p></li>
			</ul>
			<p>
				"Большой зал" - зал в котором собрано по-настоящему уникальное профессиональное оборудование 
				которое навряд ли ещё где найдёте! Blackstar One - Легенда профессионального гитарного усиления ! 
				Усилитель ставший основой гитарного звука многих профессиональных музыкантов таких коллективов как 
				Bon Jovi, Ozzy Osbourne, Alice Cooper, Dimmu Borgir, Cradle of Filth, Behemoth, Emperor (Ihsahn), My
				Dying Bride, Tarja Turunen, Rascal Flatts, Journey и многих других !!! Гитарный саунд усилителя Blackstar
				дополняет злость и напористость бескомпромисно звучащего Hughes &amp; Kettner Warp T Amplifier с
				кабинетом Marshall Celestion 4x12''. Бас-гитаристов в зале ждет легенда бас гитарного усиления Ampeg 
				SVT3 PRO с кабинетом Ampeg 4x10''. И конечно же в зале установлена двухбочечная барабанная установка -
				Yamaha double bass drum.&nbsp;
			</p>
    </div>
  </div>
)

export default BigRoom;