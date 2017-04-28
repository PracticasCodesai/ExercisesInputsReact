import React from 'react';
import Form from './Form';

class FormPage extends React.Component {

  constructor(props, context){
    super(props, context);

    this.addInput = this.addInput.bind(this);
    this.removeInput = this.removeInput.bind(this);
  }

  addInput(){}
  removeInput(){}

  render(){
    return (
        <Form
          addInput={this.addInput}
          removeInput={this.removeInput}
          hiddenAdd={false}
          hiddenRemove={false}
        />
    );
  }

}

export default FormPage;
