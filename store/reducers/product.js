import PRODUCTS from '../../data/raw-data'

const initialState = {
    allProducts:PRODUCTS,
    userProduct:PRODUCTS.filter(item=>item.ownerId==='u1')
}

const productReducers = (state=initialState,action)=>{
    return state
}

export default productReducers