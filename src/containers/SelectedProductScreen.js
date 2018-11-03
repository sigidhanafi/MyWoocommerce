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

import ProductCell from '../containers/ProductCell'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  bodyContainer: {
    marginVertical: 10
  }
})

class SelectedProductScreen extends React.Component {
  renderProduct = item => {
    return <ProductCell product={item} />
  }

  render() {
    const {
      selectedProduct: { data }
    } = this.props

    if (data.length <= 0) {
      return (
        <View style={styles.container}>
          <View style={[styles.bodyContainer, { alignItems: 'center' }]}>
            <Text>{`There is no selected product!`}</Text>
          </View>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.bodyContainer}>
          <FlatList
            data={data}
            keyExtractor={item => item._id}
            renderItem={({ item }) => this.renderProduct(item)}
            numColumns={2}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedProduct: state.selectedProduct
  }
}

export default connect(mapStateToProps)(SelectedProductScreen)
