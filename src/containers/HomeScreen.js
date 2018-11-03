import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux'
import debounce from 'lodash/debounce'

import { fetchData, searchStoreData } from '../actions/StoreAction'
import StoreList from './StoreList'

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
  }
})

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      keyword: ''
    }
  }

  componentDidMount() {
    this.props.fetchData()
  }

  searchStore = debounce(() => {
    const { keyword } = this.state
    this.props.searchStoreData(keyword)
  }, 100)

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchTextInput}
            placeholder={'Search by store name'}
            onChangeText={text => {
              this.setState({ keyword: text })
              this.searchStore()
            }}
          />
        </View>
        <StoreList />
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
    fetchData: () => dispatch(fetchData()),
    searchStoreData: keyword => dispatch(searchStoreData(keyword))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
