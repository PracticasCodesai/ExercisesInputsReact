import React,{PropTypes} from 'react';


class InputEmail extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.removeInput = this.removeInput.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
  }

  removeInput() {
    this.props.deleteManagerInputs(this.props.position);
  }

  updateEmail(){
    return this.props.updateEmailState(this.props.position);
  }

  isHiddenButtonRemove(){
    return this.props.email === "" && this.props.oneInput;
  }

  isHiddenButtonAdd(){
    const LIMIT_MAX_EMAILS = 5;
    return this.props.position === LIMIT_MAX_EMAILS-1;
  }


  render(){
    return (<div>
      <input
        className="form-control"
        type="email"
        value={this.props.email}
        onChange={this.updateEmail()}
      />
      <input type="button"
             className={this.isHiddenButtonAdd() ? "btn hidden" : "btn"}
             onClick={this.props.addManagerInputs}  value="+"/>

      <input type="button"
             className={this.isHiddenButtonRemove() ? "btn hidden" : "btn"}
             onClick={this.removeInput} value="-"/>
    </div>);
  }


}

InputEmail.propTypes = {
  position: PropTypes.number.isRequired,
  deleteManagerInputs: PropTypes.func.isRequired,
  updateEmailState: PropTypes.func.isRequired,
  addManagerInputs: PropTypes.func.isRequired,
  oneInput: PropTypes.bool.isRequired,
  email: PropTypes.string
};

export default InputEmail;
