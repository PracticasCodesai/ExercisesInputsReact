import React,{PropTypes} from 'react';
import InputEmail from './InputEmail';

class ManagerInputEmail extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.updateButtonRemove(this.props.email || "",this.props.oneInput);

    this.updateButtonRemove = this.updateButtonRemove.bind(this);
    this.addInput = this.addInput.bind(this);
    this.removeInput = this.removeInput.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.updateButtonRemove(nextProps.email,nextProps.oneInput);
  }

  render(){
    return(
      <InputEmail
        email={this.props.email}
        addInput={this.addInput}
        removeInput={this.removeInput}
        updateEmailState={this.props.updateEmailState}
        updateButtonState={this.updateButtonRemove}
        hiddenButtonRemove={this.hiddenButtonRemove}
      />
    );
  }

  updateButtonRemove(email, oneInput){
    if(oneInput) {
      this.hiddenButtonRemove = email === "";
    }else{
      this.hiddenButtonRemove = false;
    }
  }

  addInput() {
    this.props.addManagerInputs();
  }

  removeInput() {
      this.props.deleteManagerInputs(this.props.email);
  }
}

ManagerInputEmail.propTypes = {
  deleteManagerInputs: PropTypes.func.isRequired,
  addManagerInputs: PropTypes.func.isRequired,
  hiddenAdd: PropTypes.bool.isRequired,
  oneInput: PropTypes.bool.isRequired,
  email: PropTypes.string
};

export default ManagerInputEmail;
