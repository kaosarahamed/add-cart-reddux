import { combineReducers } from "redux";
import productReducer from "./products/productReducer";
import priceReducer from "./prices/priceReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
    product : productReducer,
    price : priceReducer,
    cart : cartReducer
});

export default rootReducer;