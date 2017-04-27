import React from 'react';
import {shallow} from 'enzyme';
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

     wrapper = shallow(<InputEmail {...props}/>);
  });

  it('should contains input type email', function () {
    const input = wrapper.find('input');
    const expected = 'email';

    expect(input.prop('type')).toEqual(expected);
  });

  it('should contains two buttons', function () {
    const buttons = wrapper.find('button');

    expect(buttons.length).toEqual(2);
  });
});
