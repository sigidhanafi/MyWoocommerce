import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import { fetchData } from '../actions/StoreAction'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  bodyContainer: {
    margin: 10
  },
  storeContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: 'rgb(224, 224, 224)',
    borderBottomWidth: 1
  }
})

class StoreListScreen extends React.Component {
  componentDidMount() {
    this.props.fetchData()
  }

  renderStore = item => {
    return (
      <TouchableOpacity
        style={styles.storeContainer}
        activeOpacity={0.5}
        onPress={() => {
          Actions.storeDetailScreen({ item })
        }}
      >
        <Text style={{ flex: 1 }}>{item.tradingName}</Text>
        <View style={{ justifyContent: 'flex-end' }}>
          <Text>{item.status}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    const {
      stores: { isLoading, error, data }
    } = this.props

    if (isLoading) {
      return (
        <View style={styles.container}>
          <View style={styles.bodyContainer}>
            <ActivityIndicator size="small" />
          </View>
        </View>
      )
    }

    if (error) {
      return (
        <View style={styles.container}>
          <View style={styles.bodyContainer}>
            <Text>{error}</Text>
          </View>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={item => item.storeId}
          renderItem={({ item }) => this.renderStore(item)}
        />
        {/* <Text>StoreListScreen</Text>
        <TouchableOpacity
          onPress={() => {
            // Actions.storeDetailScreen()
          }}
        >
          <Text>Klik Me</Text>
        </TouchableOpacity> */}
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
