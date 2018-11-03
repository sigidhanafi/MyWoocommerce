import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'

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
    width: width / 2 - 2 * 10,
    height: width / 2 - 2 * 10
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  productlabel: {
    fontSize: 14
  }
})

const ProductCell = props => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: props.product.imageUrl }}
        defaultSource={defaultProduct}
        style={styles.productImage}
        resizeMode={'contain'}
      />
      <Text style={styles.productName}>{props.product.name}</Text>
      <Text style={styles.productlabel}>$ {props.product.priceBux}</Text>
    </View>
  )
}

export default ProductCell
