import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../../src/reducers';
import initialState from '../../src/reducers/initialState';
import * as FormAction from '../../src/actions/FormAction';
import thunk from 'redux-thunk';

describe('Integration test', function () {
  it('connect store test integration with emails', function () {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

    let formEmails = ['prueba@gmail.com'];

    const action = FormAction.loadEmailsSuccess(formEmails);
    store.dispatch(action);

    const actual = store.getState().emails[0];

    expect(actual).toEqual("prueba@gmail.com");
  });
});
