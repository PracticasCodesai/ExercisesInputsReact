import initialState from './initialState';
import * as type from '../actions/actionTypes';

export default function FormReducer(state = initialState.emails, action){
  switch (action.type){
    case type.LOAD_EMAILS_SUCCESS:
      return action.emails;
    default:
      return state;
  }
}
