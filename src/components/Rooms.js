import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


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

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
  
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rooms)