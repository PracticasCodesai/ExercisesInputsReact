import React from 'react';
import {shallow} from 'enzyme';
import Form from '../../src/components/Form';
import InputEmail from '../../src/components/InputEmail';
import FormPage from '../../src/components/FormPage';

describe('<Form />',function(){
  let formPage = new FormPage();

  console.log(FormPage.addInput);
  let wrapper = shallow( <Form
    addInput={formPage.addInput}
    removeInput={formPage.removeInput}
    hiddenAdd={formPage.hiddenAdd}
    hiddenRemove={formPage.hiddenRemove}
  />);


  it('should contains input submit', function () {
    const input = wrapper.find('input');
    const expected = 'submit';

    expect(input.prop('type')).toEqual(expected);
  });

  it('should contains input submit', function () {
    const input = wrapper.find(InputEmail);

    expect(input.length).toEqual(1);
  });

});
