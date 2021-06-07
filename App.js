import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import ShopNavigator from './naviagtion/ShopNavigation'

import productReducer from './store/reducers/product'


export default function App() {
  const rootReducer = combineReducers({
    product:productReducer
  })

  const store = createStore(rootReducer)

  return (
    <Provider store={store}>
      <ShopNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
