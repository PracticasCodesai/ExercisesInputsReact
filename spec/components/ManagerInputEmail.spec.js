import React from 'react';
import {mount, shallow} from 'enzyme';
import {Form} from '../../src/components/Form';
import InputEmail from '../../src/components/InputEmail';

function mountPropsEmail(emails){
  return mount(<Form emails={emails}/>)
}

function clickRemoveButton(wrapper) {
  let buttons = wrapper.find('input').find({type: 'button'});
  buttons.last().simulate('click');
}

describe('<ManagerInputEmail />',function(){

  it('should contains input submit', function () {
    let wrapper = mountPropsEmail([]);
    let input = wrapper.find('input');
    expect(input.find({type: 'submit'}).length).toEqual(1);
  });

  it('should contains <InputEmail />', function () {
    let wrapper = mountPropsEmail([]);
    const input = wrapper.find(InputEmail);
    expect(input.length).toEqual(1);
  });

  it("should contains only addInput button when start without emails", function () {
    let wrapper = mountPropsEmail([]);
    let allButtons = wrapper.find('input').find({type: 'button'});
    expect(allButtons.find('.hidden').length).toEqual(1);
  });


  it("should contains 'add button' and 'remove button' when start with 1 email", function () {
    let wrapper = mountPropsEmail(["prueba@gmail.com"]);

    let allButtons = wrapper.find('input').find({type: 'button'});
    expect(allButtons.find('.hidden').length).toEqual(0);
  });

  it("should contains 'remove button' when start with 0 emails and change to 1 email", function () {
    let wrapper = mountPropsEmail([]);
    let input = wrapper.find('input').find({type: 'email'});

    input.simulate('change', { target: { value: "a"} });

    let allButtons = wrapper.find('input').find({type: 'button'});
    expect(allButtons.find('.hidden').length).toEqual(0);
  });

  it('should contains email when emails contains 1', function () {
    let email = "prueba@gmail.com";
    let wrapper = mountPropsEmail([email]);

    let input = wrapper.find("input").find({value: email});
    expect(input.length).toEqual(1);
  });

  it('should contains 2 inputs when have 2 emails', function () {
    let wrapper = mountPropsEmail(["prueba@gmail.com", "prueba2@gmail.com"]);

    let input = wrapper.find("input").find({type: "email"});
    expect(input.length).toEqual(2);
  });

  it("should contains 2 'remove buttons' when have 2 inputs though inputs are empty", function () {
    let wrapper = mountPropsEmail(["prueba@gmail.com", "prueba2@gmail.com"]);
    let input = wrapper.find('input').find({type: "email"}).last();

    input.simulate('change', { target: { value: ""} });


    let buttonHidden = wrapper.find("button").find(".hidden");
    expect(buttonHidden.length).toEqual(0);
  });

  it("should remove value when 'remove button' are clicked with only 1 email", function () {
    let wrapper = mountPropsEmail(["prueba@gmail.com"]);

    let button = wrapper.find('input').find({type: 'button'}).last();
    button.simulate('click');

    let input = wrapper.find('input').find({type: 'email'});
    expect(input.node.value).toEqual("");

    let buttonHidden = wrapper.find('input').find({type: 'button'}).find(".hidden");
    expect(buttonHidden.length).toEqual(1);
  });

  it("should remove a <InputEmail/> when 'remove button' are clicked with 2 emails or more", function () {
    let expectedEmail = "prueba2@gmail.com";
    let wrapper = mountPropsEmail(["prueba@gmail.com", expectedEmail, "prueba3@gmail.com"]);

    let button = wrapper.find('input').find({type: 'button'}).last();
    button.simulate('click');

    let input = wrapper.find("input").find({type: "email"});

    expect(input.length).toEqual(2);
    expect(input.last().node.value).toEqual(expectedEmail);
  });

  it("should add a <InputEmail/> when 'add button' are clicked with 0 email", function () {
    let wrapper = mountPropsEmail([]);

    let button = wrapper.find('input').find({type: 'button'}).first();
    button.simulate('click');

    let input = wrapper.find(InputEmail);

    expect(input.length).toEqual(2);
  });

  it("should not add a <InputEmail/> when 'add button' are clicked with 5 email", function () {
    let emails = [
      "1@gmail.com",
      "2@gmail.com",
      "3@gmail.com",
      "4@gmail.com",
      "5@gmail.com"];
    let wrapper = mountPropsEmail(emails);

    let button = wrapper.find('input').find({type: 'button'}).first();
    button.simulate('click');

    let inputEmail = wrapper.find(InputEmail);

    expect(inputEmail.length).toEqual(5);
  });

  it("should contains only addRemove when click 'remove button' give 1 email", function () {
    let wrapper = mountPropsEmail(["1@gmail.com"]);

    let button = wrapper.find('input').find({type: 'button'}).last();
    button.simulate('click');

    let buttonsHidden = wrapper.find('input').find({type: 'button'}).find(".hidden");
    expect(buttonsHidden.length).toEqual(1);
  });

  it("should remove all <InputEmail /> and after add only two empty", function () {
     let emails = [
        "1@gmail.com",
        "2@gmail.com",
        "3@gmail.com",
        "4@gmail.com",
        "5@gmail.com"];
    let wrapper = mountPropsEmail(emails);

    for(let i = 0; i < emails.length; i++){
      let buttonRemove = wrapper.find('input').find({type: 'button'}).last();
      buttonRemove.simulate('click');
    }
    let buttonAdd = wrapper.find('input').find({type: 'button'}).first();
    buttonAdd.simulate("click");

    let inputEmail = wrapper.find(InputEmail);
    expect(inputEmail.length).toEqual(2);
  });

  it("should contain 'remove button' when start email empty and click 'add button'", function () {
    let wrapper = mountPropsEmail([]);

    let buttonAdd = wrapper.find('input').find({type: 'button'}).first();
    buttonAdd.simulate('click');

    let buttonsHidden = wrapper.find("input").find({type: 'button'}).find('.hidden');
    expect(buttonsHidden.length).toEqual(0);
  });

  it("should not reset value thought change value and click 'add button'", function () {
    let wrapper = mountPropsEmail(["prueba@gmail.com"]);
    let input = wrapper.find('input').find({type: 'email'});

    let newText = "jonay@gmail.com";
    input.simulate('change', { target: { value: newText} });

    let buttonAdd = wrapper.find('input').find({type: 'button'}).first();
    buttonAdd.simulate('click');

    expect(input.node.value).toEqual(newText);
  });


  it("not should  have conflict if 2 same values", function () {
    let email = "prueba@gmail.com";
    let wrapper = mountPropsEmail([email, email]);

    let inputs = wrapper.find('input').find({type: 'email'});

    let newText = "jonay";
    inputs.last().simulate('change', { target: { value: email+newText} });

    expect(inputs.first().node.value).toEqual(email);
    expect(inputs.last().node.value).toEqual(email+newText);
  });

  it("not should have conflict<InputEmail/> with same value when click in 'remove button'", function () {
    let email = "prueba@gmail.com";
    let wrapper = mountPropsEmail([email, "", email]);

    clickRemoveButton(wrapper);

    let inputs = wrapper.find("input").find({type: "email"});
    expect(inputs.first().node.value).toEqual(email);
    expect(inputs.length).toEqual(2);
  });

  it("should not add a <InputEmail/> when 'add button' are clicked with 5 email", function () {
    let emails = [
        "1@gmail.com",
        "2@gmail.com",
        "3@gmail.com",
        "4@gmail.com",
        "5@gmail.com",];
    let wrapper = mountPropsEmail(emails);

    let buttonsHidden = wrapper.find("input").find({type : "button"}).find(".hidden");
    expect(buttonsHidden.length).toEqual(1);
  });

});
