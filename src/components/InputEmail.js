import React,{PropTypes} from 'react';

class InputEmail extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.hiddenButtonRemove = this.props.hiddenRemove;

    this.state = {
      email: this.props.email || ""
    };

    this.updateButtonRemove = this.updateButtonRemove.bind(this);
    this.updateEmailState = this.updateEmailState.bind(this);
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
          onClick={this.props.addInput}>+</button>

        <button
          className={this.hiddenButtonRemove ? "btn hidden" : "btn"}
          onClick={this.props.removeInput}>-</button>

      </div>
    );
  }


  updateButtonRemove(email){
    this.hiddenButtonRemove = email === "";
  }


  updateEmailState(event){
    let email = event.target.value;
    this.updateButtonRemove(email);
    return this.setState({email: email});
  }
}

InputEmail.propTypes = {
  addInput: PropTypes.func.isRequired,
  removeInput: PropTypes.func.isRequired,
  hiddenAdd: PropTypes.bool.isRequired,
  hiddenRemove: PropTypes.bool.isRequired,
  email: PropTypes.string
};

export default InputEmail;
