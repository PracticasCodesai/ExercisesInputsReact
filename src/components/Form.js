import React, {PropTypes} from 'react';
import InputEmail from './InputEmail';

class Form extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.hiddenAdd = false;
    this.hiddenRemove = this.props.emails.length === 0;

  }

  _createInputEmailRow(){
    let emails = this.props.emails;
    if(emails.length === 0){emails = [""];}

    let i = 0;
    return emails.map(email =>
      <InputEmail
        key={i++}
        hiddenAdd={this.hiddenAdd}
        oneInput={emails.length === 1}
        email={email}/>
    );
  }

  render(){
    return (
      <div className="container">
        <h1>Form email</h1>
        <form>
          {this._createInputEmailRow()}
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

