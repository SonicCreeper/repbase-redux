import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'


const Schedule = props => (
  <div>
    <h1>Расписание</h1>

    <table>
	  <tr>
	    <tc></tc>
	    <tc></tc>
	    <tc></tc>
	    <tc></tc>
	    <tc></tc>
	    <tc></tc>
	    <tc></tc>
	  </tr>
	  <tr>
	    <tc></tc>
	    <tc></tc>
	    <tc></tc>
	    <tc></tc>
	    <tc></tc>
	    <tc></tc>
	    <tc></tc>
	  </tr>
	  <tr>
	    <tc></tc>
	    <tc></tc>
	    <tc></tc>
	    <tc></tc>
	    <tc></tc>
	    <tc></tc>
	    <tc></tc>
	  </tr>
	</table>
  </div>
)

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
  
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Schedule)