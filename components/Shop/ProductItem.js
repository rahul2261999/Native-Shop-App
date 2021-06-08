import React from 'react'
import { Text,Button, Image, View,StyleSheet, Platform,TouchableOpacity,TouchableNativeFeedback } from 'react-native'
import color from '../../constants/color'

const ProductItem = props =>{
    const TouchableComp = Platform.OS==="android"?TouchableNativeFeedback:TouchableOpacity


    return(
        <View style={style.product}>
        <View style={style.touchable}>
            <TouchableComp onPress={props.onViewDetail} useForeground>
                <View>
                    <View style={style.imgBox}>
                        <Image style={style.image} source={{uri:props.image}} />
                    </View>
                    <View style={style.details}>
                        <Text style={style.title}>{props.title}</Text>
                        <Text style={style.price}>Rs.{props.price.toFixed(2)}</Text>
                    </View>
                    <View style={style.actions}>
                        <Button color={color.primary} title="Preview" onPress={props.onViewDetail} />
                        <Button color={Platform.OS==="android"?"":color.primary} title="Add to cart" onPress={props.onAddCart} />
                    </View>
                </View>
            </TouchableComp>
        </View>
        </View>
    )
}

const style = StyleSheet.create({
    product:{
        shadowColor:'black',
        shadowOpacity:0.2,
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        elevation:5,
        borderRadius:10,
        backgroundColor:'white',
        height:300,
        margin:20
    },
    touchable:{
        overflow:'hidden',
        borderRadius:10
    },
    details:{
        alignItems:'center',
        height:'15%',
        padding:10
    },
    imgBox:{
        width:'100%',
        height:'60%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        overflow:'hidden'
    },
    image:{
        width:'100%',
        height:'100%'
    },
    title:{
        fontFamily:'sans-regular',
        fontSize:18,
        marginVertical:2,
    },
    price:{
        fontSize:14,
        color:'#888',
        fontFamily:'sans'
    },
    actions:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center",
        height:"25%",
        padding:'10%'
    }
})

export default ProductItem