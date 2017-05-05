import React,{PropTypes} from 'react';
import InputEmail from './InputEmail';

class ManagerInputEmail extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.removeInput = this.removeInput.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
  }

  render(){
    const LIMIT_MAX_EMAILS = 5;
    return(
      <InputEmail
        email={this.props.email}
        addInput={this.props.addManagerInputs}
        removeInput={this.removeInput}
        updateEmail={this.updateEmail()}
        hiddenButtonRemove={this.props.email === "" && this.props.oneInput}
        hiddenButtonAdd={this.props.position === LIMIT_MAX_EMAILS-1}
      />
    );
  }

  removeInput() {
      this.props.deleteManagerInputs(this.props.position);
  }

  updateEmail(){
     return this.props.updateEmailState(this.props.position);
  }

}

ManagerInputEmail.propTypes = {
  position: PropTypes.number.isRequired,
  deleteManagerInputs: PropTypes.func.isRequired,
  addManagerInputs: PropTypes.func.isRequired,
  oneInput: PropTypes.bool.isRequired,
  email: PropTypes.string
};

export default ManagerInputEmail;
