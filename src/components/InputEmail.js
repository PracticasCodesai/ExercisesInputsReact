import React,{PropTypes} from 'react';

class InputEmail extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      email: this.props.email || ""
    };

    this.updateEmailState = this.updateEmailState.bind(this);
  }

  updateEmailState(event){
    let email = event.target.value;
    return this.setState({email: email});
  }

  componentWillReceiveProps(nextProps){
    this.setState({email: nextProps.email});
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
          className={this.props.hiddenRemove ? "btn hidden" : "btn"}
          onClick={this.props.removeInput}>-</button>

      </div>
    );
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
