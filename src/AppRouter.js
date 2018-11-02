import React from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'

import appStore from './reducers'

import StoreListScreen from './containers/StoreListScreen'
import StoreDetailScreen from './containers/StoreDetailScreen'

const store = createStore(appStore, applyMiddleware(logger))

export default (AppRouter = () => (
  <Provider store={store}>
    <Router>
      <Stack key="root">
        <Scene
          key="storeListScreen"
          component={StoreListScreen}
          title="Stores"
        />
        <Scene
          key="storeDetailScreen"
          component={StoreDetailScreen}
          title="Store Detail"
        />
      </Stack>
    </Router>
  </Provider>
))
