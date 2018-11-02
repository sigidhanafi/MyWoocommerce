import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'

export default class StoreListScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>StoreListScreen</Text>
        <TouchableOpacity
          onPress={() => {
            Actions.storeDetailScreen()
          }}
        >
          <Text>Klik Me</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
