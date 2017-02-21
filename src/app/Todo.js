import React, { Component } from 'react'
import {
  AppRegistry,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { styles } from './styles'


export class Todo extends Component {
  constructor(){
    super()
    this.state = {
      todos: [],
      newTodo: ''
    }
  }

  handleChange(text) {
    this.setState({newTodo: text})
  }

  handlePress() {
    if (this.state.newTodo.length > 0 && Number.isInteger(parseInt(this.state.newTodo))) {
      const todos = [...this.state.todos, this.state.newTodo]
      this.setState({todos, newTodo: ''})
    } else {
      this.setState({newTodo: ''})
    }
  }

  handleDelete(i) {
    this.state.todos.splice(i, 1)
    const todos = [...this.state.todos]
    this.setState({todos})
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            value={this.state.newTodo}
            onChangeText={this.handleChange.bind(this)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={this.handlePress.bind(this)}
          >
            <Text style={styles.buttonText}>Ok</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.list}>
          {this.state.todos.map((todo, i) => (
            <TouchableOpacity onPress={this.handleDelete.bind(this, i)} key={i} style={styles.listElement}>
              <Text style={styles.listText} key={i}>{todo}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    )
  }
}
