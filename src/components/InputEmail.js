import React, {PropTypes} from 'react';


const InputEmail = ({email, addInput, removeInput, updateEmail, hiddenButtonAdd, hiddenButtonRemove}) => {
  return (<div>
    <input
      className="form-control"
      type="email"
      value={email}
      onChange={updateEmail}
    />
    <input type="button"
      className={hiddenButtonAdd ? "btn hidden" : "btn"}
      onClick={addInput}  value="+"/>

    <input type="button"
      className={hiddenButtonRemove ? "btn hidden" : "btn"}
      onClick={removeInput} value="-"/>
  </div>);
  };

InputEmail.propTypes = {
  email: PropTypes.string.isRequired,
  addInput: PropTypes.func.isRequired,
  removeInput: PropTypes.func.isRequired,
  updateEmail: PropTypes.func.isRequired,
  hiddenButtonRemove: PropTypes.bool.isRequired,
  hiddenButtonAdd: PropTypes.bool.isRequired,
};

export default InputEmail;
