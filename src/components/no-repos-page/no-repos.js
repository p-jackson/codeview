import React, {Component} from 'react'
import styles from './no-repos.less'
import withStyles from '../../decorators/with-styles'
import RepoBadge from './repo-badge'

const popularRepos = [
  'twbs/bootstrap',
  'vhf/free-programming-books',
  'angular/angular.js',
  'mbostock/d3',
  'jquery/jquery',
  'h5bp/html5-boilerplate',
  'facebook/react',
  'robbyrussell/oh-my-zsh'
]

@withStyles(styles)
export default class NoReposPage extends Component {
  render() {
    const badges = popularRepos.map(repo =>
      <RepoBadge repo={repo} key={repo} />
    )
    return (
      <div className="noReposPage">
        <div className="noReposPage-narrowContainer">
          <h1>No Codez!</h1>
          <p>
            It's more fun to try <b><code>codeview</code></b> when you have code! Try one of these popular
            projects to get started.
          </p>
        </div>
        <div className="noReposPage-wideContainer">
          <ul>
            {badges}
          </ul>
        </div>
      </div>
    )
  }
}
