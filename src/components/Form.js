import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as FormAction from '../actions/FormAction';

import ManagerInputEmail from './ManagerInputEmail';

export class Form extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.hiddenAdd = false;
    this.hiddenRemove = this.props.emails.length === 0;

    this.state = {
      emails: Object.assign([], this.props.emails)
    };

    this.deleteEmail = this.deleteEmail.bind(this);
    this.addEmail = this.addEmail.bind(this);
    this.updateEmailState = this.updateEmailState.bind(this);
  }

  _createInputEmailRow(){
    let emails = this.state.emails;
    if(emails.length === 0){emails = [""];}

    let id = 0;
    let i = 0;
    return emails.map(email =>
      <ManagerInputEmail
        key={id++}
        position={i++}
        hiddenAdd={this.hiddenAdd}
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

    this.setState({emails: newEmails});}
  }


  _resetManagerInputs(newEmails){
    this.setState({emails: newEmails});
  }


  componentWillReceiveProps(nextProps){
    this.setState({emails: Object.assign([], nextProps.emails)});
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


function mapStateToProps(state, ownProps) {
  return {
    emails: state.emails
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FormAction, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Form);

