import React from 'react';
import {mount} from 'enzyme';
import {Form} from '../../src/components/Form';
import InputEmail from '../../src/components/InputEmail';

describe('<ManagerInputEmail />',function(){

  let wrapper;
  beforeEach(function () {
    let props = {
      emails: []
    };

    wrapper = mount(<Form {...props}/>);
  });


  it('should contains input submit', function () {
    let input = wrapper.find('input');
    expect(input.find({type: 'submit'}).length).toEqual(1);
  });

  it('should contains <InputEmail />', function () {
    const input = wrapper.find(InputEmail);
    expect(input.length).toEqual(1);
  });

  it("should contains only addInput button when start without emails", function () {
    let allButtons = wrapper.find("button");
    expect(allButtons.find('.hidden').length).toEqual(1);
  });


  it("should contains addInput and removeInput button when start with 1 email", function () {
    let props = {
      emails: ["prueba@gmail.com"]
    };
    let wrapper = mount(<Form {...props}/>);

    let allButtons = wrapper.find("button");
    expect(allButtons.find('.hidden').length).toEqual(0);
  });

  it("should contains addInput button when start with 0 email and add 1 email them add button remove", function () {
    let props = {
      emails: []
    };
    let wrapper = mount(<Form {...props}/>);
    let input = wrapper.find('input').find({type: 'email'});

    input.simulate('change', { target: { value: "a"} });

    let allButtons = wrapper.find("button");
    expect(allButtons.find('.hidden').length).toEqual(0);
  });

  it('should contains email when emails contains 1', function () {
    let email = "prueba@gmail.com";
    let props = {
      emails: [email]
    };

    let wrapper = mount(<Form {...props}/>);

    let input = wrapper.find("input").find({value: email});
    expect(input.length).toEqual(1);
  });

  it('should contains 2 inputs when have 2 emails', function () {
    let props = {
      emails: ["prueba@gmail.com", "prueba2@gmail.com"]
    };

    let wrapper = mount(<Form {...props}/>);

    let input = wrapper.find("input").find({type: "email"});
    expect(input.length).toEqual(2);
  });

  it("should contains 2 remove buttons when have 2 inputs though inputs are empty", function () {
    let props = {
      emails: ["prueba@gmail.com", "prueba2@gmail.com"]
    };
    let wrapper = mount(<Form {...props}/>);

    let input = wrapper.find('input').find({type: "email"}).last();

    input.simulate('change', { target: { value: ""} });


    let buttonHidden = wrapper.find("button").find(".hidden");
    expect(buttonHidden.length).toEqual(0);
  });

  it("should remove value when remove button are clicked with only 1 email", function () {

    let props = {
      emails: ["prueba@gmail.com"]
    };

    let wrapper = mount(<Form {...props}/>);

    let button = wrapper.find('button').last();
    button.simulate('click');

    let input = wrapper.find('input').find({type: 'email'});
    expect(input.node.value).toEqual("");

    let buttonHidden = wrapper.find("button").find(".hidden");
    expect(buttonHidden.length).toEqual(0);
  });

  it("should remove a <InputEmail/> when remove button are clicked with 2 emails or more", function () {
    let props = {
      emails: ["prueba@gmail.com", "prueba2@gmail.com", "prueba2@gmail.com"]
    };
    let wrapper = mount(<Form {...props}/>);

    let button = wrapper.find('button').last();
    button.simulate('click');

    let input = wrapper.find("input").find({type: "email"});

    expect(input.length).toEqual(2);
    expect(input.last().node.value).toEqual(props.emails[1]);
  });

  it("should add a <InputEmail/> when add button are clicked with 0 email", function () {
    let props = {
      emails: []
    };
    let wrapper = mount(<Form {...props}/>);

    let button = wrapper.find('button').first();
    button.simulate('click');

    let input = wrapper.find(InputEmail);

    expect(input.length).toEqual(2);
  });



});
