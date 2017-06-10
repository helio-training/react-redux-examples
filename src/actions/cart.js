export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const EMPTY_CART = 'EMPTY_CART';

export const addToCart = (product = {}, quantity = 1) => {
  return {
    type: ADD_TO_CART,  //Required by redux
    product,
    quantity
  }
};

export const removeFromCart = (product = {}, quantityToRemove = 1) => {
  return {
    type: REMOVE_FROM_CART,
    product,
    quantityToRemove
  }
};

export const emptyCart = () => {
  return {
    type: EMPTY_CART
  }
};
