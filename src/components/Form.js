import React, {PropTypes} from 'react';
import InputEmail from './InputEmail';

class Form extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  addInput(){}
  removeInput(){}

  render(){
    return (
      <div className="container">
        <form>
          <InputEmail
            addInput={this.addInput}
            removeInput={this.removeInput}
            hiddenAdd={false}
            hiddenRemove={false}/>


          <input
            type="submit"
          />
        </form>
      </div>
    );
  }
}

export default Form;
