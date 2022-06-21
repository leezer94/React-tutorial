import { ActionTypes } from '../constans/action-types';

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };

    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, products: payload };
    case ActionTypes.REMOVE_SELECTED_PRODUECT:
      return {};
    default:
      return state;
  }
};