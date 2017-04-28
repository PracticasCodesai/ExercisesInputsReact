import React from 'react';
import {shallow} from 'enzyme';
import InputEmail from '../../src/components/InputEmail'
import Form from '../../src/components/Form';


describe('<Form />',function(){
  let wrapper = shallow( <Form
    addInput={() =>{}}
    removeInput={() =>{}}
    hiddenAdd={false}
    hiddenRemove={false}
  />);

  it('should constains One <InputEmail /> component', function () {
      expect(wrapper.find("InputEmail").node.type).toBe(InputEmail);
  });

  it('should contains input submit', function () {
    const input = wrapper.find('input');
    const expected = 'submit';

    expect(input.prop('type')).toEqual(expected);
  });

});
