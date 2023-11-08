import { ADDTOCART, ADDQTY, REMOVEQTY, REMOVECART, TOTALPRICE, REMOVETOTALPRICE } from "./actionTypes";
import initialCart from "./initialCart";

const idIsExist = (state, id) => {
    const isExist = state.some((item) => item.id === id);
    return isExist
}

const cartReducer = (state = initialCart, action) => {
    const {payload} = action;
    const copyItem = [...state];
    switch (action.type) {
        case ADDTOCART:
            if(idIsExist(state, action.payload.id)){
                if(payload.qty <= 0){
                    return state
                }
                return copyItem.map((item) => item.id === payload.id ? {...item, cartQty : item.cartQty + 1, totalPrice : item.totalPrice + payload.price} : item)

            }else{
                copyItem.push({...payload, cartQty : 1, totalPrice : payload.price})
                return copyItem
            }
        case REMOVECART:
            return state.filter((item) => item.id !== action.payload);
        case TOTALPRICE:
            return state.map((item) => item.id === action.payload.id ? {...item, totalPrice : item.totalPrice + action.payload.price} : item);        
        case REMOVETOTALPRICE:
            return state.map((item) => item.id === action.payload.id ? {...item, totalPrice : item.totalPrice - action.payload.price} : item);        
        case ADDQTY:
            return state.map((item) => action.payload.qty >= 0 && item.cartQty >= 0 && item.id === action.payload.id ? {...item, cartQty : item.cartQty + 1} : item);
        case REMOVEQTY:
            return state.map((item) => item.cartQty > 0 && item.id === action.payload.id ? {...item, cartQty : item.cartQty - 1} : item);  
        default:
            return state;
    }
};

export default cartReducer;