import React from 'react';
import FormConnect from './Form';

class FormPage extends React.Component {

  constructor(props, context){
    super(props, context);
  }

  render(){
    return (
        <FormConnect/>
    );
  }
}

export default FormPage;

