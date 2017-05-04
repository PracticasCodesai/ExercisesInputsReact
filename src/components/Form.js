import React, {PropTypes} from 'react';
import InputEmail from './InputEmail';

class Form extends React.Component {

  constructor(props, context){
    super(props, context);

    this.addInput = this.addInput.bind(this);
    this.removeInput = this.removeInput.bind(this);

    this.hiddenAdd = false;
    this.hiddenRemove = this.props.emails.length === 0;


    this.addInput = this.addInput.bind(this);
    this.removeInput = this.removeInput.bind(this);
  }

  addInput(){}

  removeInput(){}

  render(){
    return (
      <div className="container">
        <h1>Form email</h1>
        <form>
          <InputEmail
            addInput={this.addInput}
            removeInput={this.removeInput}
            hiddenAdd={this.hiddenAdd}
            hiddenRemove={this.hiddenRemove}
            email={this.props.emails[0]}
            />
          <input
            type="submit"
          />
        </form>
      </div>
    );
  }

}

Form.propTypes = {
  emails: PropTypes.array.isRequired
};

export default Form;

