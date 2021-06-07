import React from 'react'
import {FlatList, Text} from 'react-native'
import {useSelector} from 'react-redux'

import ProductItem from '../../components/Shop/ProductItem'

const ProductOverviewScreen = props =>{
    const products = useSelector(state=>state.product.allProducts)
    return <FlatList 
        data={products} 
        keyExtractor={item=>item.id} 
        renderItem={prod=><ProductItem title={prod.item.title} image={prod.item.imageUrl} price={prod.item.price} onViewDetail={()=>{}} onAddCart={()=>{}} />} />
}

export default ProductOverviewScreen
