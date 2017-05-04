import React,{PropTypes} from 'react';

class InputEmail extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.updateButtonRemove(this.props.email || "");

    this.state = {
      email: this.props.email || ""
    };

    this.updateButtonRemove = this.updateButtonRemove.bind(this);
    this.updateEmailState = this.updateEmailState.bind(this);
    this.addInput = this.addInput.bind(this);
    this.removeInput = this.removeInput.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({email: nextProps.email});
    this.updateButtonRemove(nextProps.email);
  }

  render(){
    return(
      <div>
        <input
          className="form-control"
          type="email"
          value={this.state.email}
          onChange={this.updateEmailState}
          />
        <button
          className="btn"
          onClick={this.addInput}>+</button>

        <button
          className={this.hiddenButtonRemove ? "btn hidden" : "btn"}
          onClick={this.removeInput}>-</button>
      </div>
    );
  }

  updateButtonRemove(email){
    if(this.props.oneInput) {
      this.hiddenButtonRemove = email === "";
    }
  }

  addInput() {
  }

  removeInput() {
    if(this.props.oneInput){
      this.setState({email: ""});
    }
  }

  updateEmailState(event){
    let email = event.target.value;
    this.updateButtonRemove(email);
    return this.setState({email: email});
  }
}

InputEmail.propTypes = {
  hiddenAdd: PropTypes.bool.isRequired,
  oneInput: PropTypes.bool.isRequired,
  email: PropTypes.string
};

export default InputEmail;
