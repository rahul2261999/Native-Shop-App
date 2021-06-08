import { ADD_TO_CART } from "../actionTypes";
import CartItem from '../../models/cartItem'

const initialState = {
    items:{},
    totalAmount:0
}

const cartReducer = (state=initialState,action)=>{
    switch (action.type) {
        case ADD_TO_CART:{
            const addProduct = action.payload
            const prodPrice = addProduct.price
            const prodTitle = addProduct.title

            let cartItemData

            if(state.items[addProduct.id]){
                cartItemData = new CartItem(state.items[addProduct.id].quantity+1,
                    prodPrice,
                    prodTitle,
                    state.items[addProduct.id].sum + prodPrice
                    )
            }else{
                cartItemData = new CartItem(1,prodPrice,prodTitle,prodPrice)
            }
            return {
                ...state,
                items:{...state.items,[addProduct.id]:cartItemData},
                totalAmount:state.totalAmount+prodPrice
            }
            
        }
    
        default:
            return state
    }
}

export default cartReducer