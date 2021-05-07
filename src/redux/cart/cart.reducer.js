import { CartActionTypes } from "./cart.types.js";

const INITIAL_STATE = {
  hidden: true,
  hoverHidden: true,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.HOVER_CART_HIDDEN:
      return {
        ...state,
        hoverHidden: !state.hoverHidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
