import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as FormAction from '../actions/FormAction';

import Form from './Form';

class FormPage extends React.Component {

  constructor(props, context){
    super(props, context);

    this.state = {
      emails: Object.assign([], this.props.emails)
    };
  }

  render(){
    return (
        <Form emails={this.state.emails}/>
    );
  }
}


function mapStateToProps(state) {
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

