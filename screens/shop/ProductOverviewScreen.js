import React from 'react'
import {FlatList, Platform,Button} from 'react-native'
import {useSelector,useDispatch} from 'react-redux'
import{HeaderButtons,Item} from 'react-navigation-header-buttons'

import ProductItem from '../../components/Shop/ProductItem'
import {addToCart} from '../../store/action/cart'
import HeaderButton from '../../components//UI/CustomHeaderButton'
import color from '../../constants/color'


const ProductOverviewScreen = props =>{
    const products = useSelector(state=>state.product.allProducts)
    const dispatch = useDispatch()

    return <FlatList 
        data={products} 
        keyExtractor={item=>item.id} 
        renderItem={prod=><ProductItem
                                title={prod.item.title}
                                image={prod.item.imageUrl} 
                                price={prod.item.price} 
                                onSelect={()=>{props.navigation.navigate('ProductDetailScreen',{productId:prod.item.id,prouctTitle:prod.item.title})}} 
                                >
                                    <Button 
                                        color={color.primary} 
                                        title="Preview" 
                                        onPress={()=>{props.navigation.navigate('ProductDetailScreen',{productId:prod.item.id,prouctTitle:prod.item.title})}} />
                                    <Button 
                                        color={Platform.OS==="android"?"":color.primary} 
                                        title="Add to cart"
                                        onPress={()=>{dispatch(addToCart(prod.item))}}
                                        />
                                </ProductItem>} />
}

ProductOverviewScreen.navigationOptions= navData =>{
    return {
        headerTitle:"All Products",
        headerLeft:()=><HeaderButtons HeaderButtonComponent={HeaderButton} >
            <Item title="Menu" iconName={Platform.OS==='android'?'md-menu':'ios-menu'} onPress={()=>navData.navigation.toggleDrawer()} />
            </HeaderButtons>,
        headerRight:()=><HeaderButtons HeaderButtonComponent={HeaderButton} >
            <Item title="Cart" iconName={Platform.OS==='android'?'md-cart':'ios-cart'} onPress={()=>navData.navigation.navigate("CartScreen")} />
            </HeaderButtons>
    }
}

export default ProductOverviewScreen
