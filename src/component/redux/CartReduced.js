import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ITEM_BY_ID } from '../../constants/Constants';

const initialState = [];
const MAX_ITEM_QUANTITY = 20; // Define the maximum quantity per item here

const updateCartItemQuantity = (cart, itemId, amount) => {
  return cart.map(item => 
    item.id === itemId
      ? { ...item, qty: item.qty + amount }
      : item
  );
};

export const cartReduce = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingItemIndex = state.findIndex(item => item.id === action.data.id);
      if (existingItemIndex !== -1) {
        if (state[existingItemIndex].qty < MAX_ITEM_QUANTITY) {
          return updateCartItemQuantity(state, action.data.id, 1);
        } else {
          return state;
        }
      } else {
        return [...state, { ...action.data, qty: 1 }];
      }

    case REMOVE_FROM_CART:
      return state.filter(item => item.id !== action.itemId);

    case REMOVE_ITEM_BY_ID:
      const itemToRemove = state.find(item => item.id === action.itemId);
      if (!itemToRemove) {
        return state;
      }
      if (itemToRemove.qty > 1) {
        return updateCartItemQuantity(state, action.itemId, -1);
      } else {
        return state.filter(item => item.id !== action.itemId);
      }

    default:
      return state;
  }
};
