import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ErrorBoundary } from './shared/error-boundary'
import createStore from './store'
import { initFormatMessage } from './format'
import { App } from './app'

export const initApp = () => {
  const root = document.getElementById('root')
  if (!root) return

  const { store } = createStore()

  initFormatMessage()

  render(
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>,
    root
  )
}

initApp()
