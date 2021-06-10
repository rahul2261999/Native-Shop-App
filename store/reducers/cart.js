import { ADD_TO_CART, CREATE_ORDER, REMOVE_FROM_CART } from "../actionTypes";
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

        case REMOVE_FROM_CART:{
            const selectedCartItem = state.items[action.payload]
            let updateCartItems
            if(selectedCartItem.quantity>1){
                 const updateCartItem = new CartItem(
                     selectedCartItem.quantity-1,
                     selectedCartItem.productPrice,
                     selectedCartItem.productTitle,
                     selectedCartItem.sum-selectedCartItem.productPrice
                     )
                 updateCartItems = {...state.items,[action.payload]:updateCartItem}
            }else{
                 updateCartItems = {...state.items}
                 delete updateCartItems[action.payload]
            }
            return{
                items:updateCartItems,
                totalAmount:state.totalAmount-selectedCartItem.productPrice
            }
        }
        case CREATE_ORDER:
            return initialState
    
        default:
            return state
    }
}

export default cartReducer