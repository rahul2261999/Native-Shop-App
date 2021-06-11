import PRODUCTS from '../../data/raw-data'
import { DELETE_PRODUCT } from '../actionTypes';

const initialState = {
    allProducts:PRODUCTS,
    userProduct:PRODUCTS.filter(item=>item.ownerId==='u1')
}

const productReducers = (state=initialState,action)=>{
   switch (action.type) {
       case DELETE_PRODUCT:
           const updateProductList = state.allProducts.filter(item=>item.id!==action.payload)
           const updateUserProductList = state.userProduct.filter(item=>item.id!==action.payload)
           return {
               ...state,
               allProducts:updateProductList,
               userProduct:updateUserProductList
           }
       default:
           return state
   }
}

export default productReducers