import React from 'react'
import {Text,View,Button,Image,ScrollView,StyleSheet, Platform} from 'react-native'
import {useSelector,useDispatch} from 'react-redux'
import color from '../../constants/color'
import { addToCart } from '../../store/action/cart'
const ProductDetailScreen = props =>{
    const id = props.navigation.getParam("productId")
    const product= useSelector(state=>state.product.allProducts.find(item=>item.id===id))
    const dispatch = useDispatch()
    return (
            <ScrollView>
                <Image style={style.image} source={{uri:product.imageUrl}}/>
                <View style={style.action}>
                    <Button color={color.primary} title="Add to Cart" onPress={()=>{dispatch(addToCart(product))}} />
                </View>
                <Text style={style.price}>{product.price}</Text>
                <Text style={style.description}>{product.description}</Text>
            </ScrollView>
        )
}

const style = StyleSheet.create({
    image:{
        width:'100%',
        height:300,
    },
    action:{
        alignItems:'center',
        marginVertical:10
    },
    price:{
        fontSize:20,
        color:'#888',
        textAlign:'center',
        marginVertical:20,
        fontFamily:'sans'
    },
    description:{
        fontSize:14,
        textAlign:'center',
        marginHorizontal:20,
        fontFamily:'sans-regular'
    }
})

ProductDetailScreen.navigationOptions = navdata =>{
    return {
        headerTitle:navdata.navigation.getParam('prouctTitle')
    }
}

export default ProductDetailScreen