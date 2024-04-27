import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import dayjs from 'dayjs'
import isToday from 'dayjs/plugin/isToday'
import isYesterday from 'dayjs/plugin/isYesterday'

import App from './App'
import { store } from './store'
import { persistor } from './store/store'

import './styles/global.css'
import { ThemeWrap } from './config/theme'

dayjs.extend(isYesterday)
dayjs.extend(isToday)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeWrap>
          <App />
        </ThemeWrap>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
