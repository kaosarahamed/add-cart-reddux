import { ADDTOPRICE, REMOVETOPRICE } from "./actionTypes";

export const addToPrice = (price) => {
    return{
        type : ADDTOPRICE,
        payload : price
    }
};

export const removeToPrice = (price) => {
    return{
        type : REMOVETOPRICE,
        payload : price
    }
};