import React, {PropTypes} from 'react';
import Form from './Form';
import {bindActionCreators} from 'redux';
import FormActions from '../actions/FormAction';

export class FormPage extends React.Component {

  constructor(props, context){
    super(props, context);

    this.state = {
      emails: Object.assign([], this.props.emails)
    };

  }

  addInput(){}

  removeInput(){}

  render(){
    return (
        <Form emails={this.state.emails} />
    );
  }

}

FormPage.propTypes = {
  emails: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    emails: state.emails
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FormActions, dispatch)
  };
}

export default FormPage;
