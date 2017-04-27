import React from 'react';
import Form from './Form';

class FormPage extends React.Component {

  constructor(props, context){
    super(props, context);
  }

  render(){
    return (
      <div>
        <h1>Form email</h1>
        <Form/>
      </div>
    );
  }

}

export default FormPage;
