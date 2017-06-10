import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from '../actions';


export default (state = [], action) => {
  switch(action.type) {
    case EMPTY_CART :
      return [];
    case ADD_TO_CART :
      return [];
    case REMOVE_FROM_CART :
      return [];
  }

  return state;
};