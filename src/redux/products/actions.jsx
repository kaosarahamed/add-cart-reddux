import { ADDPRODUCT, ADDQUANTITY, REMOVEQUANTITY } from "./actionTypes";

export const addProducts = (items) => {
    return{
        type : ADDPRODUCT,
        payload : items
    }
};
export const addQuantity = (id) => {
    return{
        type : ADDQUANTITY,
        payload : id
    }
};
export const removeQuantity = (id) => {
    return{
        type : REMOVEQUANTITY,
        payload : id
    }
};
