import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import SearchBar from 'react-native-material-design-searchbar'

export class Search extends Component {
  constructor(){
    super()
    this.state = {
      items: ['one', 'two', 'three']
    }
  }

  handleSearch(e){
    const searchableItem = this.state.items.filter(item => (item == e))
    if (searchableItem.length > 0) {
      this.setState({items: [...searchableItem]})
    } else {
      this.setState({items: ['one', 'two', 'three']})
    }
  }

  render() {
    return (
      <View>
        <SearchBar
          onSearchChange={this.handleSearch.bind(this)}
          height={50}
          onFocus={() => console.log('On Focus')}
          onBlur={() => console.log('On Blur')}
          placeholder={this.props.placeholder}
          autoCorrect={false}
          padding={5}
          returnKeyType={'search'}
        />
        {this.state.items.map((item, i) => (<Text key={i}>{item}</Text>))}
      </View>
    )
  }
}
