import { Platform } from 'react-native'
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen'
import ProductDetailScreen from '../screens/shop/ProductDetailsScreen'

import color from '../constants/color'

const stackconfig = { 
    defaultNavigationOptions:{
        headerStyle:{
            backgroundColor:Platform.OS==='android'?color.primary:'',
        },
        headerTitleStyle:{
            fontFamily:'sans'
        },
        headerBackTitleStyle:{
            fontFamily:'sans-regular'
        },
        headerTintColor:Platform.OS==='android'?"white":color.primary
    }
}

const MealNavigator = createStackNavigator({
    ProductOverviewScreen:ProductOverviewScreen,
    ProductDetailScreen:ProductDetailScreen,
},stackconfig)


export default createAppContainer(MealNavigator)