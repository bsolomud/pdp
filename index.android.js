/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Todo } from './src/app/Todo';
const Main = () => (<Todo />)

// class pdp extends Component {
//   render() {
//     return (
//       <Todo />
//     );
//   }
// }

AppRegistry.registerComponent('pdp', () => Main);
