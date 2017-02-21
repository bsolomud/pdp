/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { AppRegistry ,View } from 'react-native'
import { Todo } from './src/app/Todo'
import { Search } from './src/app/Search'
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view'

const Main = () => (
  <ScrollableTabView
    style={{marginTop: 20, }}
    initialPage={0}
    renderTabBar={() => <ScrollableTabBar />}
  >
    <Todo tabLabel="Tab #1" />
    <Search placeholder='write some text...' tabLabel="Tab #2" />
  </ScrollableTabView>
)

// class pdp extends Component {
//   render() {
//     return (
//       <Todo />
//     );
//   }
// }

AppRegistry.registerComponent('pdp', () => Main);
