import Order from "../../models/order";
import { CREATE_ORDER } from "../actionTypes";

const initialState = {
    orders:[]
}

export default (state=initialState,action)=>{
    switch (action.type) {
        case CREATE_ORDER:
            const {cartItems,totalAmt} = action.payload
            const newOrder = new Order(new Date().toString(),cartItems,totalAmt,new Date())
            return {
                orders:state.orders.concat(newOrder)
            }
        default:
            return state
    }
}