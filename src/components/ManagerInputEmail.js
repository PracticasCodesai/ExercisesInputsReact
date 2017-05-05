import React,{PropTypes} from 'react';
import InputEmail from './InputEmail';

class ManagerInputEmail extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.addInput = this.addInput.bind(this);
    this.removeInput = this.removeInput.bind(this);
  }

  render(){
    return(
      <InputEmail
        position = {this.props.position}
        email={this.props.email}
        addInput={this.addInput}
        removeInput={this.removeInput}
        updateEmailState={this.props.updateEmailState}
        hiddenButtonRemove={this.props.email === "" && this.props.oneInput}
        hiddenButtonAdd={this.props.position === 4}
      />
    );
  }

  addInput() {
    this.props.addManagerInputs();
  }

  removeInput() {
      this.props.deleteManagerInputs(this.props.position);
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
