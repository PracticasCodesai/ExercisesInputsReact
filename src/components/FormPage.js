import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as FormAction from '../actions/FormAction';

import Form from './Form';

export class FormPage extends React.Component {

  constructor(props, context){
    super(props, context);

    this.state = {
      emails: Object.assign([], this.props.emails)
    };
  }


  componentWillReceiveProps(nextProps){
      this.setState({emails: Object.assign([], nextProps.emails)});
  }


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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FormAction, dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(FormPage);
