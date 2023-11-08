import { ADDTOCART, ADDQTY, REMOVEQTY, REMOVECART, TOTALPRICE, REMOVETOTALPRICE } from "./actionTypes";

export const addToCart = (item) => {
    return{
        type : ADDTOCART,
        payload : item
    }
};
export const removeToCart = (id) => {
    return{
        type : REMOVECART,
        payload : id
    }
};
export const totalPrice = (price, id) => {
    return{
        type : TOTALPRICE,
        payload : {
            price, 
            id
        }
    }
}
export const removeTotalPrice = (price, id) => {
    return{
        type : REMOVETOTALPRICE,
        payload : {
            price, 
            id
        }
    }
}

export const addQty = (qty, id) => {
    return{
        type : ADDQTY,
        payload : {
            qty,
            id
        }
    }
};

export const removeQty = (qty, id) => {
    return{
        type : REMOVEQTY,
        payload : {
            qty,
            id
        }
    }
};