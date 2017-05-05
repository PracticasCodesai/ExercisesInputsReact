import React,{PropTypes} from 'react';
import InputEmail from './InputEmail';

class ManagerInputEmail extends React.Component {

  constructor(props, context) {
    super(props, context);

    this._updateButtonRemove(this.props.email || "");

    this.state = {
      email: this.props.email || ""
    };

    this._updateButtonRemove = this._updateButtonRemove.bind(this);
    this.updateEmailState = this.updateEmailState.bind(this);
    this.addInput = this.addInput.bind(this);
    this.removeInput = this.removeInput.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({email: nextProps.email});
    this._updateButtonRemove(nextProps.email);
  }

  render(){
    return(
      <InputEmail
        email={this.state.email}
        addInput={this.addInput}
        removeInput={this.removeInput}
        updateEmailState={this.updateEmailState}
        hiddenButtonRemove={this.hiddenButtonRemove}
      />
    );
  }

  _updateButtonRemove(email){
    if(this.props.oneInput) {
      this.hiddenButtonRemove = email === "";
    }else{
      this.hiddenButtonRemove = false;
    }
  }

  addInput() {
  }

  removeInput() {
    if(this.props.oneInput){
      this.setState({email: ""});
    }else{
      this.props.resetManagerInputs(this.state.email);
    }
  }

  updateEmailState(event){
    let email = event.target.value;
    this._updateButtonRemove(email);
    return this.setState({email: email});
  }
}

ManagerInputEmail.propTypes = {
  resetManagerInputs: PropTypes.func.isRequired,
  hiddenAdd: PropTypes.bool.isRequired,
  oneInput: PropTypes.bool.isRequired,
  email: PropTypes.string
};

export default ManagerInputEmail;
