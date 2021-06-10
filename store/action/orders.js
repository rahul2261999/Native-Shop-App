import { CREATE_ORDER } from "../actionTypes"

export const createOrder = (cartItems,totalAmt)=>{
    return {
        type:CREATE_ORDER,
        payload:{cartItems,totalAmt}
    }
}