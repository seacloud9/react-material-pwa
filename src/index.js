import 'babel-polyfill'
//import devToolsEnhancer from 'remote-redux-devtools'
import WordpressContainer from './containers/WordpressContainer'
import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import {  ConnectedRouter, routerMiddleware, push } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
const history = createHistory()
const middleware = routerMiddleware(history)
export const store = createStore(reducer, applyMiddleware(middleware))

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = props
  }
  render () {
    return (
      <ConnectedRouter history={history}>
      <div>
        <Route exact path="/" component={WordpressContainer}/>
        <Route path="/about" component={WordpressContainer}/>
      </div>
    </ConnectedRouter>
    )
  }
}
ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#wordpressContainer'))
