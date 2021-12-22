import React from 'react'

import PropTypes from 'prop-types'

import styles from './navigation-links1.module.css'

const NavigationLinks1 = (props) => {
  return (
    <nav className={` ${styles['Nav']} ${styles[props.rootClassName]} `}>
      <span className={styles['text']}>{props.text}</span>
      <span className={styles['text1']}>{props.text1}</span>
    </nav>
  )
}

NavigationLinks1.defaultProps = {
  text: 'Â¿QuiÃ©nes somos?',
  rootClassName: '',
  text1: 'Ayuda',
}

NavigationLinks1.propTypes = {
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks1
