import { ADDPRODUCT, ADDQUANTITY, REMOVEQUANTITY } from "./actionTypes";
import initialState from "./initialState";



const maxID = (state) => {
    const maxId = state.reduce((maxid, todo) => Math.max(todo.id, maxid), -1);
    return maxId + 1
}


const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDPRODUCT:
            return[
                ...state,
                {
                    id : maxID(state),
                    title : action.payload.title,
                    image : action.payload.image,
                    category : action.payload.category,
                    price : Number(action.payload.price),
                    qty : Number(action.payload.qty),

                }
            ]
        case ADDQUANTITY:
            return state.map((item) => item.id === action.payload ? {...item, qty : item.qty + 1} : item)
        case REMOVEQUANTITY:
            return state.map((item) => item.qty > 0 && item.id === action.payload ? {...item, qty : item.qty - 1} : item)           
        default:
            return state;
    }
};


export default productReducer;