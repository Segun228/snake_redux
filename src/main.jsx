import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { gameReducer } from './store/gameSlice.js'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware } from '@reduxjs/toolkit'
import { thunk } from 'redux-thunk'

import "./zero.css"
import './index.css'
import App from './App.jsx'

const store = configureStore({
  reducer: {
    game : gameReducer,
  },
  devTools: composeWithDevTools(applyMiddleware(thunk)),
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </StrictMode>,
)
