import React from 'react';
import {mount} from 'enzyme';
import InputEmail from '../../src/components/InputEmail';

describe('<InputEmail /> component', function(){
  let wrapper;

  beforeEach(function () {
    const props = {
      addInput : () =>{},
      removeInput : () =>{},
      hiddenAdd : false,
      hiddenRemove : false
    };

     wrapper = mount(<InputEmail {...props}/>);
  });

  it('should contains input type email', function () {
    const input = wrapper.find('input');

    expect(input.find({type: 'email'}).length).toEqual(1);
  });

  it('should constains One <InputEmail /> component', function () {
    expect(wrapper.find("InputEmail").length).toEqual(1);
  });

  it('should contains two buttons', function () {
    const buttons = wrapper.find('button');
    expect(buttons.length).toEqual(2);
  });
});
