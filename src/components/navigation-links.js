import React from 'react'

import PropTypes from 'prop-types'

import styles from './navigation-links.module.css'

const NavigationLinks = (props) => {
  return (
    <nav className={` ${styles['Nav']} ${styles[props.rootClassName]} `}>
      <span className={styles['text']}>{props.text3}</span>
      <span className={styles['text1']}>{props.text4}</span>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  text4: 'Ayuda',
  rootClassName: '',
  text3: 'Â¿QuiÃ©nes somos?',
}

NavigationLinks.propTypes = {
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
}

export default NavigationLinks
