import React from 'react';
import {mount} from 'enzyme';
import FormPage from '../../src/components/FormPage';
import Form from '../../src/components/Form';
import InputEmail from '../../src/components/InputEmail';

describe("<FormPage/>", function () {

  let wrapper;

  beforeEach(function () {
    let props = {
      emails: []
    };

    wrapper = mount(<FormPage {...props}/>);
  });

  it("should contains <Form/>", function () {
    expect(wrapper.find(Form).length).toEqual(1);
  });

  it('should contains input email', function () {
    const allInputs = wrapper.find(InputEmail);
    expect(allInputs.length).toEqual(1);
  });

});
