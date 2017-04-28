import React, {PropTypes} from 'react';
import InputEmail from './InputEmail';

const Form = ({addInput,removeInput,hiddenAdd,hiddenRemove}) => {
  return (
      <div className="container">
        <h1>Form email</h1>
        <form>
          <InputEmail
            addInput={addInput}
            removeInput={removeInput}
            hiddenAdd={hiddenAdd}
            hiddenRemove={hiddenRemove}/>
          <input
            type="submit"
          />
        </form>
      </div>
    );
};
Form.propTypes = {
    addInput : PropTypes.func.isRequired,
    removeInput : PropTypes.func.isRequired,
    hiddenAdd : PropTypes.bool.isRequired,
    hiddenRemove : PropTypes.bool.isRequired
};

export default Form;

