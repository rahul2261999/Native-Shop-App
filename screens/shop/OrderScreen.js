import React from 'react'
 import {FlatList,Text} from 'react-native'
 import {useSelector} from 'react-redux'
 import {HeaderButtons,Item} from 'react-navigation-header-buttons'
 import HeaderButton from '../../components/UI/CustomHeaderButton'

 const OrderScreen = props =>{

    const orders = useSelector(state=>state.order.orders)
    console.log(orders);
     return(
         <FlatList 
         data={orders} 
         keyExtractor={item=>item.id} 
         renderItem={itemData=><Text>{itemData.item.totalAmount}</Text>} />
     )
 }

 OrderScreen.navigationOptions = navData=>{
    return {
        headerTitle:'Order',
        headerLeft:()=><HeaderButtons HeaderButtonComponent={HeaderButton} >
        <Item title="Menu" iconName={Platform.OS==='android'?'md-menu':'ios-menu'} onPress={()=>navData.navigation.toggleDrawer()} />
        </HeaderButtons>,
    }
 }

 export default OrderScreen