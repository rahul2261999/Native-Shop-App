import { DELETE_PRODUCT } from "../actionTypes"

export const deleteProduct = prodId =>{
    return{
        type:DELETE_PRODUCT,
        payload:prodId
    }
}