

import React, { PropTypes, Component } from 'react'
import styles from './content-page.less'
import withStyles from '../../decorators/with-styles'

@withStyles(styles)
class ContentPage extends Component {

  static propTypes = {
    path: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string,
    centre: PropTypes.bool
  }

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  }

  render() {
    const cls = 'contentPage' + (this.props.centre ? ' isCentred' : '')
    this.context.onSetTitle(this.props.title)
    return (
      <div className={cls}>
        <div className="contentPage-container">
          <div dangerouslySetInnerHTML={{__html: this.props.content || ''}} />
        </div>
      </div>
    )
  }

}

export default ContentPage
