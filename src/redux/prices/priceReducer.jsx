import { ADDTOPRICE, REMOVETOPRICE } from "./actionTypes";
import initialPrice from "./initialPrice";


const priceReducer = (state = initialPrice, action) => {
    switch (action.type) {
        case ADDTOPRICE:
            return {
                ...state,
                price : state.price + action.payload,
                quantity : state.quantity + 1

            }
        case REMOVETOPRICE:
            return {
                ...state,
                price : state.price - action.payload,
                quantity : state.quantity - 1

            }
        default:
            return state;
    }
};


export default priceReducer;