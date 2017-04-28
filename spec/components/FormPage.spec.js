import React from 'react';
import {shallow, mount} from 'enzyme';
import FormPage from '../../src/components/FormPage';
import Form from '../../src/components/Form';
import InputEmail from '../../src/components/InputEmail';

describe("<FormPage/>", function () {

  it("should contains <Form/>", function () {
    let wrapper = mount(<FormPage />);
    expect(wrapper.find(Form).type()).toBe(Form);
  });


  it('should contains input email', function () {
    let wrapper = mount(<FormPage />);

    const allInputs = wrapper.find(InputEmail);
    expect(allInputs.length).toEqual(1);
  });


});
