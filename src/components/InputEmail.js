import React,{PropTypes} from 'react';

class InputEmail extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render(){
    return(
      <div>
        <input className="form-control" type="email"/>

        <button
          className="btn"
          onClick={this.props.addInput}
          hidden={this.props.hiddenAdd}>+</button>

        <button
          className="btn"
          onClick={this.props.removeInput}
          hidden={this.props.hiddenRemove}>-</button>
      </div>
    );
  }
}

InputEmail.propTypes = {
  addInput: PropTypes.func.isRequired,
  removeInput: PropTypes.func.isRequired,
  hiddenAdd: PropTypes.bool.isRequired,
  hiddenRemove: PropTypes.bool.isRequired
};

export default InputEmail;
