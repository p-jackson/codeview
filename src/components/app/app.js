import React, { PropTypes, Component } from 'react'
import normalizeCss from '../../../node_modules/normalize.css/normalize.css'
import styles from './app.less'
import withContext from '../../decorators/with-context'
import withStyles from '../../decorators/with-styles'
import Header from '../Header'
import Sidebar from '../sidebar'

@withContext
@withStyles(normalizeCss, styles)
class App extends Component {

  static propTypes = {
    children: PropTypes.element.isRequired,
    error: PropTypes.object,
  }

  render() {
    return !this.props.error ? (
      <div className="l-app">
        <Sidebar />
        <div className="l-content">
          <Header />
          {this.props.children}
        </div>
      </div>
    ) : this.props.children
  }

}

export default App
