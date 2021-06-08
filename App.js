import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStore,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import ShopNavigator from './naviagtion/ShopNavigation'
import productReducer from './store/reducers/product'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import {composeWithDevTools} from 'redux-devtools-extension'
import cartReducer from './store/reducers/cart'

export default function App() {
  const rootReducer = combineReducers({
    product:productReducer,
    cart:cartReducer
  })

  const store = createStore(rootReducer,composeWithDevTools())

  const loadingFont = ()=>{
      return Font.loadAsync({
        'sans':require('./assets/fonts/OpenSans-Bold.ttf'),
        'sans-regular':require('./assets/fonts/OpenSans-Regular.ttf')
      })
  }

  const [fontLoaded,setFontLoaded] = useState(false)


  if(!fontLoaded){
    return <AppLoading startAsync={loadingFont} onError={()=>console.log("error happen in App loading")} onFinish={()=>setFontLoaded(true)} />
  }
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
