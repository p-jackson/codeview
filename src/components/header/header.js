

import React, { Component } from 'react'
import styles from './header.less'
import withStyles from '../../decorators/with-styles'

@withStyles(styles)
class Header extends Component {

  render() {
    return (
      <div className="Header">
        <div className="Header-container">

        </div>
      </div>
    )
  }

}

export default Header
