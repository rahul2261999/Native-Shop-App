import { Platform } from 'react-native'
import {createAppContainer} from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'

import ProductOverviewScreen from '../screens/shop/ProductOverviewScreen'
import ProductDetailScreen from '../screens/shop/ProductDetailsScreen'
import CartScreen from '../screens/shop/CartScreen'
import UserProductScreen from '../screens/user/UserProductScreen'
import EditProductScreen from '../screens/user/EditProductScreen'

import color from '../constants/color'
import OrderScreen from '../screens/shop/OrderScreen'
import { Ionicons } from '@expo/vector-icons'

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

const ShopNavigation = createStackNavigator({
    ProductOverviewScreen:ProductOverviewScreen,
    ProductDetailScreen:ProductDetailScreen,
    CartScreen:CartScreen
},{
    ...stackconfig,
    navigationOptions:{
        drawerIcons:drawerConfig=>(
            <Ionicons
                name={Platform.OS==="android"?'md-create':'ios-create'}
                size={23}
                color={drawerConfig.tintColor}
            />
        )
    }
})

const OrderNavigation = createStackNavigator({
    Orders:OrderScreen,
},{
    ...stackconfig,
    navigationOptions:{
        drawerIcons:drawerConfig=>(
            <Ionicons
                name={Platform.OS==="android"?'md-create':'ios-create'}
                size={23}
                color={drawerConfig.tintColor}
            />
        )
    }
})

const AdminProducts = createStackNavigator({
    Products:UserProductScreen,
    EditProduct:EditProductScreen
},{
    ...stackconfig,
    navigationOptions:{
        drawerIcons:drawerConfig=>(
            <Ionicons
                name={Platform.OS==="android"?'md-create':'ios-create'}
                size={23}
                color={drawerConfig.tintColor}
            />
        )
    }

})

const drawernavigation = createDrawerNavigator({
    shop:ShopNavigation,
    order:OrderNavigation,
    Product:AdminProducts
},{
    contentOptions:{
            activeTintColor:color.primary,
            itemsContainerStyle:{
                marginTop:50,
            }
        },
    
})


export default createAppContainer(drawernavigation)