import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import './index.css'

import axios from 'axios'
import App from './App'
import store from './store/config'
import { worker } from './mocks/browser'

const queryClient = new QueryClient()

if (import.meta.env.DEV) {
  worker.start({ onUnhandledRequest: 'bypass' })
}

axios.defaults.withCredentials = true

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
)
