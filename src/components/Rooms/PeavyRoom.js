import React from 'react'

import mainPic from '../../images/Rooms/peavey_room.jpg'

import '../../styles/Rooms.css'


const PeavyRoom = props => (
  <div className="room-desc">
    <h1>Peavey зал</h1>

    <img src={mainPic} alt="Main pic" />
    <div>
    	<h3> Оборудование </h3>
    	<li><p>PEAVEY 5150 Head + Гитарный кабинет RANDALL 4x12" 200Вт</p></li>
    	<li><p>PEAVEY ValveKing 100 Head + Гитарный кабинет RANDALL 4x12" 200Вт</p></li>
    	<li><p>PEAVEY Tour 450 BASS AMPLIFIER Басс кабинет Celestion 1x15'' мощность 400 Вт</p></li>
    	<li><p>Барабанная установка PEARL TARGET</p></li>
    	<li><p>Акустическая система Peavey / Crown</p></li>
			<p>
				"Peavey зал" - трибьют известному американскому производителю ламповых усилителей ставшей за 
				последние десятки лет уже легендой вошедшей в основу звучания многих выдающихся коллективов в 
				разных стилях! Полнота звучания и неподдельный характер усилителей Пиви ждет вас в зале "Peavey"!&nbsp;
			</p>
    </div>
  </div>
)

export default PeavyRoom