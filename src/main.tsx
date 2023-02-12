import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import './index.css'

import axios from 'axios'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import store from './store/config'

import { worker } from './mocks/browser'

const queryClient = new QueryClient()

if (import.meta.env.MODE === 'development') {
  worker.start({ onUnhandledRequest: 'bypass' })
}
// eslint-disable-next-line global-require
// worker.stop()

axios.defaults.withCredentials = true

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </HelmetProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
)
