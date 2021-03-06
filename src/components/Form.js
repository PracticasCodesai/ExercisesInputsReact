import React, {PropTypes} from 'react';


import InputEmail from './InputEmail';

export class Form extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.hiddenRemove = this.props.emails.length === 0;

    this.state = {
      emails: Object.assign([], this.props.emails)
    };

    this.deleteEmail = this.deleteEmail.bind(this);
    this.addEmail = this.addEmail.bind(this);
    this.updateEmailState = this.updateEmailState.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({emails: Object.assign([], nextProps.emails)});
  }


  _createInputEmailRow(){
    let emails = this.state.emails;
    if(emails.length === 0){emails = [""];}

    let id = 0;
    let i = 0;
    return emails.map(email =>
      <InputEmail
        key={id++}
        position={i++}
        deleteManagerInputs={this.deleteEmail}
        addManagerInputs={this.addEmail}
        updateEmailState={this.updateEmailState}
        oneInput={emails.length === 1}
        email={email}/>
    );
  }

  deleteEmail(position){
    let newEmails = Object.assign([], this.state.emails);
    newEmails.splice(position, 1);
    this._resetManagerInputs(newEmails);
  }

  addEmail(){
    if(this.state.emails.length < 5) {
      let newEmails = Object.assign([], this.state.emails);

      if (newEmails.length === 0) {
        newEmails.push("");
        newEmails.push("");
      } else {
        newEmails.push("");
      }

      this._resetManagerInputs(newEmails);
    }
  }

  updateEmailState(position){
    return (event) => {
    let email = event.target.value;

    let newEmails = Object.assign([], this.state.emails);
    newEmails.splice(position,1, email);

    this._resetManagerInputs(newEmails);
    };
  }


  _resetManagerInputs(newEmails){
    this.setState({emails: newEmails});
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

