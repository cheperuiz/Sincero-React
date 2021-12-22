import React from 'react'

import PropTypes from 'prop-types'

import Button from './button'
import styles from './btn-group.module.css'

const BtnGroup = (props) => {
  return (
    <div className={` ${styles['BtnGroup']} ${styles[props.rootClassName]} `}>
      <Button></Button>
    </div>
  )
}

BtnGroup.defaultProps = {
  rootClassName: '',
}

BtnGroup.propTypes = {
  rootClassName: PropTypes.string,
}

export default BtnGroup
