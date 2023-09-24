import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

export const LogIn = (props) => {
  return (
    <div>LogIn</div>
  )
}

LogIn.propTypes = {
  second: PropTypes.third
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)