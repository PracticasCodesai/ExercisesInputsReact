import React, {PropTypes} from 'react';
import Form from './Form';
import {bindActionCreators} from 'redux';
import FormActions from '../actions/FormAction';

export class FormPage extends React.Component {

  constructor(props, context){
    super(props, context);

    this.addInput = this.addInput.bind(this);
    this.removeInput = this.removeInput.bind(this);

    this.hiddenAdd=false;
    this.hiddenRemove=false;

    this.state = {
      emails: Object.assign({}, this.props.emails)
    };

  }

  addInput(){}

  removeInput(){}

  render(){
    return (
        <Form
          addInput={this.addInput}
          removeInput={this.removeInput}
          hiddenAdd={this.hiddenAdd}
          hiddenRemove={this.hiddenRemove}
        />
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
