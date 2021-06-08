import React from 'react'
import {FlatList, Platform} from 'react-native'
import {useSelector,useDispatch} from 'react-redux'
import{HeaderButtons,Item} from 'react-navigation-header-buttons'

import ProductItem from '../../components/Shop/ProductItem'
import {addToCart} from '../../store/action/cart'
import HeaderButton from '../../components//UI/CustomHeaderButton'


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
                                onViewDetail={()=>{props.navigation.navigate('ProductDetailScreen',{productId:prod.item.id,prouctTitle:prod.item.title})}} 
                                onAddCart={()=>{dispatch(addToCart(prod.item))}} />} />
}

ProductOverviewScreen.navigationOptions={
    headerTitle:"All Products",
    headerRight:()=><HeaderButtons HeaderButtonComponent={HeaderButton} >
            <Item title="Cart" iconName={Platform.OS==='android'?'md-cart':'ios-cart'} onPress={()=>{}} />
            </HeaderButtons>
}

export default ProductOverviewScreen
