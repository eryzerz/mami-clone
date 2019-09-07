import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator, createAppContainer, createBottomTabNavigator, BottomTabBar,createSwitchNavigator } from 'react-navigation'
// import ExploreNavigator from './src/screens/explore'
import Wishlist from './src/screens/wishlist'
import Chat from './src/screens/chat'
import Login from './src/screens/login'
// import RegistrationNavigator from './src/screens/login';
import HomeNavigator from './src/screens/homeNavigator'
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'

import dorms from './src/store/reducers'

const reducers = combineReducers({
  dorms,
})

const store = createStore(
  reducers
)

const AppNavigator = createSwitchNavigator(
  {
    Login: Login,
    HomeNavigator: HomeNavigator,

    Wishlist: Wishlist,
    Chat: Chat,
  },
  {
    headerMode: 'none'
  }
)

const RootNavigation = createAppContainer(AppNavigator)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigation/>
      </Provider>
    )
  }
}

export default App