import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  RefreshControl
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
  },
  searchContainer: {
    padding: 10,
    backgroundColor: '#4FA149'
  },
  searchTextInput: {
    backgroundColor: 'white',
    paddingVertical: 5,
    borderRadius: 4
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  statusContainer: {
    minWidth: 100,
    alignItems: 'center',
    borderRadius: 20
  },
  status: {
    alignSelf: 'center',
    paddingVertical: 4,
    color: 'white'
  }
})

class StoreList extends React.Component {
  renderStore = item => {
    const statusColor = item.status === 'verified' ? '#EF430B' : '#4FA149'
    return (
      <TouchableOpacity
        key={`${item.storeId}`}
        style={styles.storeContainer}
        activeOpacity={0.5}
        onPress={() => {
          Actions.storeDetailScreen({ item })
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>{item.tradingName.toUpperCase()}</Text>
        </View>
        <View
          style={[styles.statusContainer, { backgroundColor: statusColor }]}
        >
          <Text style={styles.status}>{item.status}</Text>
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

    if (data.length <= 0) {
      return (
        <View style={styles.container}>
          <View style={[styles.bodyContainer, { alignItems: 'center' }]}>
            <Text>{`Store not found!`}</Text>
          </View>
        </View>
      )
    }

    return (
      <FlatList
        data={data}
        keyExtractor={item => item.storeId}
        renderItem={({ item }) => this.renderStore(item)}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={this.props.fetchData}
          />
        }
      />
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
)(StoreList)
