import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import {Tabs, Tab} from 'material-ui/Tabs'
import {Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {routerActions} from 'react-router-redux'

class App extends Component {
  render () {
    const {tabValue} = this.props
    return (
      <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
        <AppBar
          title={'Github App'}
        />
        <div style={{ flexGrow: 1 }}>
          <Switch>
            <Route path='/A' render={() => (<span>A</span>)} />
            <Route path='/B' render={() => (<span>B</span>)} />
            <Route path='/C' render={() => (<span>C</span>)} />
            <Route path='*' render={() => (<span>empty</span>)} />
          </Switch>
        </div>
        <Tabs
          value={tabValue}
          onChange={value => this.onTabChange(value)}
        >
          <Tab label='A' value='/A' />
          <Tab label='B' value='/B' />
          <Tab label='C' value='/C' />
        </Tabs>
      </div>
    )
  }

  onTabChange (value) {
    this.props.changeTabValue(value)
  }
}

export default connect(state => ({
  tabValue: state.app.tabValue || state.router.location.pathname
}), dispatch => ({
  changeTabValue (value) {
    dispatch({ type: 'CHANGE_TAB', payload: value })
    dispatch(routerActions.replace(value))
  }
})
)(App)
