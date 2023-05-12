import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './theme/customizationReducer';
import authReducer from './auth/authSlice';
// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  customization: customizationReducer,
  auth: authReducer,
});

export default reducer;
