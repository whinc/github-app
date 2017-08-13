import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import registerServiceWorker from './registerServiceWorker'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createHashHistory} from 'history'
import {Provider} from 'react-redux'
import {reducer} from './reducer'
import {ConnectedRouter, routerReducer, routerMiddleware} from 'react-router-redux'

injectTapEventPlugin()

const history = createHashHistory()

const routerMiddleWare = routerMiddleware(history)

const store = createStore(combineReducers({
  app: reducer,
  router: routerReducer
}), {}, applyMiddleware(routerMiddleWare))

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
