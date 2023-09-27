 import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ITEM_BY_ID } from "../../constants/Constants";


 export function addToCart(item) {
    return {
        type:ADD_TO_CART,
        data: item
    }
 }
 export const removeFromCart = (itemId) => ({
    type: REMOVE_FROM_CART,
    itemId,
  });
  
  export const removeItemFromCart = (itemId) => ({
   type: REMOVE_ITEM_BY_ID,
   itemId,
 });
 
  