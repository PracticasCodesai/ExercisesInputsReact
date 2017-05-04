import React, {PropTypes} from 'react';


const InputEmail = ({email, addInput, removeInput, updateEmailState, hiddenButtonRemove}) => {
  return (<div>
    <input
      className="form-control"
      type="email"
      value={email}
      onChange={updateEmailState}
    />
    <button
      className="btn"
      onClick={addInput}>+</button>

    <button
      className={hiddenButtonRemove ? "btn hidden" : "btn"}
      onClick={removeInput}>-</button>
  </div>);
  };

InputEmail.propTypes = {
  email: PropTypes.string.isRequired,
  addInput: PropTypes.func.isRequired,
  removeInput: PropTypes.func.isRequired,
  updateEmailState: PropTypes.func.isRequired,
  hiddenButtonRemove: PropTypes.bool.isRequired,
};

export default InputEmail;
