import React, {Component} from 'react'
import withStyles from '../../decorators/with-styles'
import styles from './sidebar.less'

@withStyles(styles)
export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-banner">
          <h1 className="sidebar-bannerTitle">codeview</h1>
          <p className="sidebar-bannerDesc">code the <span className="sidebar-descMono">view</span> &mdash; view the <span className="sidebar-descMono">code</span></p>
        </div>
      </div>
    )
  }
}
