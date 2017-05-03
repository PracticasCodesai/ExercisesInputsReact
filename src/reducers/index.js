import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import FormReducer from './FormReducer';

const rootReducer = combineReducers({
   emails: FormReducer,
  routing: routerReducer
});

export default rootReducer;
