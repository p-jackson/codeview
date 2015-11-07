

import React, { PropTypes, Component } from 'react' // eslint-disable-line no-unused-vars
import invariant from 'fbjs/lib/invariant'
import { canUseDOM } from 'fbjs/lib/ExecutionEnvironment'

let count = 0

function withStyles(...styles) {
  return (ComposedComponent) => class WithStyles extends Component {

    static contextTypes = {
      onInsertCss: PropTypes.func,
    }

    constructor() {
      super()
      this.refCount = 0
      ComposedComponent.prototype.renderCss = function render(css) {
        let el
        if (canUseDOM) {
          el = this.styleId && document.getElementById(this.styleId)
          if (el) {
            if ('textContent' in el) {
              el.textContent = css
            } else {
              el.styleSheet.cssText = css
            }
          } else {
            this.styleId = `dynamic-css-${count++}`
            el = document.createElement('style')
            el.setAttribute('id', this.styleId)
            el.setAttribute('type', 'text/css')

            if ('textContent' in el) {
              el.textContent = css
            } else {
              el.styleSheet.cssText = css
            }

            document.getElementsByTagName('head')[0].appendChild(el)
            this.refCount++
          }
        } else {
          this.context.onInsertCss(css)
        }
      }.bind(this)
    }

    componentWillMount() {
      for (const style of styles) {
        if (canUseDOM) {
          invariant(style.use, `The style-loader must be configured with reference-counted API.`)
          style.use()
        } else {
          this.context.onInsertCss(style.toString())
        }
      }
    }

    componentWillUnmount() {
      for (const style of styles) {
        style.unuse()
        if (this.styleId) {
          this.refCount--
          if (this.refCount < 1) {
            const el = document.getElementById(this.styleId)
            if (el) {
              el.parentNode.removeChild(style)
            }
          }
        }
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }

  }
}

export default withStyles
