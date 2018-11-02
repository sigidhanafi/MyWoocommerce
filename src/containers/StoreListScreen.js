import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import { fetchData } from '../actions/StoreAction'

class StoreListScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>StoreListScreen</Text>
        <TouchableOpacity
          onPress={() => {
            // Actions.storeDetailScreen()
            this.props.fetchData()
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

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreListScreen)
