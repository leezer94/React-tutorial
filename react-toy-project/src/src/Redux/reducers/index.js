import { combineReducers } from 'redux';
import { productReducer, selectedProductReducer } from './productReducer';

// Combining all the reducers made

export const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});
