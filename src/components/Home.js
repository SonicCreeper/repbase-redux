import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { setName } from '../actions/HomeActions'
import NameWin from './NameWin'


const Home = props => (
  <div>
    <h1>Репетиционная база Repbase</h1>
    <NameWin name={props.name} isNameSet={props.isNameSet} setName={props.setName}/>
  </div>
)

const mapStateToProps = state => ({
  isNameSet: state.Home.isNameSet,
  name: state.Home.name
})

const mapDispatchToProps = dispatch => bindActionCreators({
  setName
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)