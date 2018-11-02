import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

class StoreListScreen extends React.Component {
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

const mapStateToProps = state => {
  return {
    stores: state.stores
  }
}

export default connect(
  mapStateToProps,
  null
)(StoreListScreen)
