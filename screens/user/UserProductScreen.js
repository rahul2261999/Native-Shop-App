import React from 'react'
import {FlatList,Button} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import {useSelector,useDispatch} from 'react-redux'
import ProductItem from '../../components/Shop/ProductItem'
import HeaderButton from '../../components/UI/CustomHeaderButton'
import color from '../../constants/color'
import { deleteProduct } from '../../store/action/product'


const UserProductScreen = props =>{
    const dispatch = useDispatch()
    const userProduct = useSelector(state=>state.product.userProduct)
    return <FlatList 
    data={userProduct} 
    keyExtractor={Item=>Item.id} 
    renderItem={itemData=><ProductItem 
        image={itemData.item.imageUrl}
        title={itemData.item.title}
        price={itemData.item.price}
        onSelect={()=>{}}
        >
            <Button 
                color={color.primary} 
                title="Delete" 
                onPress={()=>dispatch(deleteProduct(itemData.item.id))} />
            <Button 
                color={Platform.OS==="android"?"":color.primary} 
                title="Edit"
                onPress={()=>{props.navigation.navigate('EditProduct',{productId:itemData.item.id})}}
                />
        </ProductItem>}/>
}

UserProductScreen.navigationOptions = navData =>{
    return{
        headerLeft:()=><HeaderButtons HeaderButtonComponent={HeaderButton} >
            <Item title="Menu" iconName={Platform.OS==='android'?'md-menu':'ios-menu'} onPress={()=>navData.navigation.toggleDrawer()} />
            </HeaderButtons>,
         headerRight:()=><HeaderButtons HeaderButtonComponent={HeaderButton} >
         <Item title="add product" iconName={Platform.OS==='android'?'md-add':'ios-add'} onPress={()=>navData.navigation.navigate('EditProduct')} />
         </HeaderButtons>,
    }
}

export default UserProductScreen