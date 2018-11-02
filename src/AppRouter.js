import React from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'

import StoreListScreen from './containers/StoreListScreen'
import StoreDetailScreen from './containers/StoreDetailScreen'

export default AppRouter = () => (
  <Router>
    <Stack key="root">
      <Scene key="storeListScreen" component={StoreListScreen} title="Stores" />
      <Scene
        key="storeDetailScreen"
        component={StoreDetailScreen}
        title="Store Detail"
      />
    </Stack>
  </Router>
)
