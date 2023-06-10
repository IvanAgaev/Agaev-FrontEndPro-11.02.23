import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import { PersistGate } from 'redux-persist/integration/react';
import {persistor} from './store/index.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor} >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>
 
)
