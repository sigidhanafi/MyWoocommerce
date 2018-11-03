import React from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { Actions } from 'react-native-router-flux'

import appStore from './reducers'
import { combinedStoreEpic } from './actions/StoreAction'
import { combinedStoreDetailEpic } from './actions/StoreDetailAction'
import { combinedStoreProductEpic } from './actions/StoreProductAction'
import { combinedSelectedProductEpic } from './actions/SelectedProductAction'

import StoreListScreen from './containers/StoreListScreen'
import StoreDetailScreen from './containers/StoreDetailScreen'
import SelectedProductScreen from './containers/SelectedProductScreen';

const observableMiddleware = createEpicMiddleware()
const middleware = [observableMiddleware, logger]
const store = createStore(appStore, applyMiddleware(...middleware))
observableMiddleware.run(
  combineEpics(
    combinedStoreEpic,
    combinedStoreDetailEpic,
    combinedStoreProductEpic,
    combinedSelectedProductEpic
  )
)

export default (AppRouter = () => (
  <Provider store={store}>
    <Router>
      <Stack
        key="root"
        rightTitle="Selected"
        onRight={() => Actions.selectedProductScreen()}
      >
        <Scene
          key="storeListScreen"
          component={StoreListScreen}
          title="WooCommerce Stores"
        />
        <Scene
          key="storeDetailScreen"
          component={StoreDetailScreen}
          title="Store Detail"
        />
        <Scene
          key="selectedProductScreen"
          component={SelectedProductScreen}
          title="Selected Product"
        />
      </Stack>
    </Router>
  </Provider>
))
