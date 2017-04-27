import React from 'react';
import {shallow} from 'enzyme';
import FormPage from '../../src/components/FormPage';
import Form from '../../src/components/Form';

describe("<FormPage/>", function () {

  it("should contains <Form/>", function () {
    let wrapper = shallow(<FormPage/>);
    expect(wrapper.find("Form").node.type).toBe(Form);
  });



});
