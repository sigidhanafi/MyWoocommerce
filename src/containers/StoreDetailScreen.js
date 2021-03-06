import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  BackHandler
} from 'react-native'
import { connect } from 'react-redux'
import { fetchDataStoreDetail } from '../actions/StoreDetailAction'

import ProductListScreen from './ProductListScreen'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  bodyContainer: {
    margin: 10
  },
  storeHeaderContainer: {
    margin: 16
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  subTitle: {
    fontSize: 14
  },
  separator: {
    backgroundColor: 'rgb(224, 224, 224)',
    height: 1,
    marginVertical: 8
  }
})

class StoreDetailScreen extends React.Component {
  componentDidMount() {
    const { storeId } = this.props.item
    this.props.fetchData(storeId)
  }

  render() {
    const {
      storeDetail: { isLoading, error, data },
      item: { storeId }
    } = this.props

    if (isLoading || data === null) {
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

    const { legalName: storeName, suburb, businessEmail } = data

    return (
      <View style={styles.container}>
        <View style={styles.storeHeaderContainer}>
          <Text style={styles.title}>{storeName}</Text>
          <Text style={styles.subTitle}>{suburb}</Text>
          <Text style={styles.subTitle}>{businessEmail}</Text>
        </View>
        <View style={styles.separator} />
        <ProductListScreen storeId={storeId} />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    storeDetail: state.storeDetail
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: storeId => dispatch(fetchDataStoreDetail(storeId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoreDetailScreen)
