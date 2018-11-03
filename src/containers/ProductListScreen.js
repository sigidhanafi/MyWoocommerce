import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList
} from 'react-native'
import { connect } from 'react-redux'
import { fetchDataStoreProduct } from '../actions/StoreProductAction'

import ProductCell from '../components/ProductCell'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  bodyContainer: {
    margin: 10
  }
})

class ProductListScreen extends React.Component {
  componentDidMount() {
    const { storeId } = this.props
    this.props.fetchData(storeId)
  }

  renderProduct = item => {
    return <ProductCell product={item} />
  }

  render() {
    const {
      storeProduct: { isLoading, error, data }
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
            <Text>{`Store doesn't have product!`}</Text>
          </View>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={item => item._id}
          renderItem={({ item }) => this.renderProduct(item)}
          numColumns={2}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    storeProduct: state.storeProduct
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: storeId => dispatch(fetchDataStoreProduct(storeId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListScreen)
