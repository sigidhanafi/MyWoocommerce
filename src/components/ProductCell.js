import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native'

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
    width: width / 2 - 20,
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
    width: width / 2 - 20,
  },
})

const ProductCell = props => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: props.product.imageUrl }}
        defaultSource={defaultProduct}
        style={styles.productImage}
        resizeMode={'cover'}
      />
      <View style={{ marginHorizontal: 0 }}>
        <Text style={styles.productName}>{props.product.name}</Text>
        <Text style={styles.productlabel}>$ {props.product.priceBux}</Text>
      </View>
      <TouchableOpacity
        style={styles.deactiveButton}
        activeOpacity={0.5}
        onPress={() => {}}
      >
        <Text style={styles.lableButton}>Deselect</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProductCell
