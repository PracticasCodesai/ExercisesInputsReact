import React from 'react';
import Root from '../../src/components/Root';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../../src/reducers';
import initialState from '../../src/reducers/initialState';
import * as FormAction from '../../src/actions/FormAction';
import thunk from 'redux-thunk';
import {browserHistory} from 'react-router';
import { syncHistoryWithStore } from  'react-router-redux';

import {mount} from 'enzyme';
import FormPage from '../../src/components/FormPage';

import { Provider } from 'react-redux';

function mountPage(store){
  return mount(<Provider store={store}><FormPage /></Provider>)
}

describe('Integration test', function () {
  it('connect store test integration with emails', function () {
    const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
    let formEmails = ['prueba@gmail.com'];
    const action = FormAction.loadEmailsSuccess(formEmails);
    store.dispatch(action);

    const actual = store.getState().emails[0];

    expect(actual).toEqual("prueba@gmail.com");
  });


  it('connect store test integration with FormPage', function () {
    let email = "prueba@gmail.com";
    const store = createStore(rootReducer, {emails: [email] }, applyMiddleware(thunk));
    let wrapper = mountPage(store);

    let input = wrapper.find("input").find({value: email});

    expect(input.node.value).toEqual(email);


  });
});
