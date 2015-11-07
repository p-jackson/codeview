

import React from 'react'
import Router from 'react-routing/src/Router'
import http from './core/http-client'
import App from './components/app'
import ContentPage from './components/content-page'

const router = new Router(on => {
  on('*', async (state, next) => {
    const component = await next()
    return component && <App context={state.context}>{component}</App>
  })

  on('*', async (state) => {
    const content = await http.get(`/api/content?path=${state.path}`)
    return content && <ContentPage {...content} />
  })
})

export default router
