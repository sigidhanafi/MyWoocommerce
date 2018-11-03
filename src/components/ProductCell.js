import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native'
import find from 'lodash/find'
import { connect } from 'react-redux'
import {
  selectProduct,
  deselectProduct
} from '../actions/SelectedProductAction'

import defaultProduct from '../images/default-product.png'

const { width } = Dimensions.get('window')
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 10,
    marginBottom: 16
  },
  productImage: {
    width: width / 2 - 20,
    height: width / 2 - 20
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  productlabel: {
    fontSize: 14
  },
  activeButton: {
    marginTop: 8,
    paddingVertical: 8,
    backgroundColor: '#EF430B',
    borderRadius: 4,
    alignItems: 'center',
    width: width / 2 - 20
  },
  lableButton: {
    color: 'white',
    fontWeight: 'bold'
  },
  deactiveButton: {
    marginTop: 8,
    paddingVertical: 8,
    backgroundColor: '#4FA149',
    borderRadius: 4,
    alignItems: 'center',
    width: width / 2 - 20
  }
})

class ProductCell extends React.PureComponent {
  render() {
    const {
      selectedProduct: { data: currentSelectedProduct },
      product
    } = this.props
    const isProductSelected = find(
      currentSelectedProduct,
      currentSelectedProduct => currentSelectedProduct._id === product._id
    )
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: product.imageUrl }}
          defaultSource={defaultProduct}
          style={styles.productImage}
          resizeMode={'cover'}
        />
        <View style={{ marginHorizontal: 0 }}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productlabel}>$ {product.priceBux}</Text>
        </View>
        {isProductSelected ? (
          <TouchableOpacity
            style={styles.deactiveButton}
            activeOpacity={0.7}
            onPress={() => {
              this.props.deselectProduct(product)
            }}
          >
            <Text style={styles.lableButton}>Deselect</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.activeButton}
            activeOpacity={0.7}
            onPress={() => {
              this.props.selectProduct(product)
            }}
          >
            <Text style={styles.lableButton}>Select</Text>
          </TouchableOpacity>
        )}
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedProduct: state.selectedProduct
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchData: storeId => dispatch(fetchDataStoreProduct(storeId)),
    selectProduct: product => dispatch(selectProduct(product)),
    deselectProduct: product => dispatch(deselectProduct(product))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCell)
