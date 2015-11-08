import React, {Component} from 'react'
import styles from './repo-badge.less'
import withStyles from '../../decorators/with-styles'
import {getAvatarUrl} from '../../network/github'

@withStyles(styles)
export default class RepoBadge extends Component {

  static propTypes = {
    repo: React.PropTypes.string.isRequired
  }

  constructor() {
    super()
    this.state = { iconUrl: '' }
  }

  componentDidMount() {
    this.loadIconUrl()
  }

  getAuthor() {
    return this.props.repo.split('/')[0]
  }

  getRepoName() {
    return this.props.repo.split('/')[1]
  }

  async loadIconUrl() {
    const url = await getAvatarUrl(this.getAuthor())
    this.setState({
      iconUrl: url
    })
  }

  render() {
    const iconStyle = { backgroundImage: `url('${this.state.iconUrl}')` }

    return (
      <li className="repoBadge">
        <div className="repoBadge-icon" style={iconStyle} />
        <div className="repoBadge-ids">
          <div className="repoBadge-repoName">{this.getRepoName()}</div>
          <div className="repoBadge-author">{this.getAuthor()}</div>
        </div>
      </li>
    )
  }
}
