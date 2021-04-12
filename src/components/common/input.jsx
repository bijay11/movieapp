import React from "react";

const Input = ({ name, label, value, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        //autoFocus

        id={name}
        name={name}
        //with this below value, input field is not going to have its own state, we are using props to use the value and the value is always coming from state.account.username
        value={value}
        onChange={onChange}
        type="text"
        className="form-control"
      />
      {/* if error is truthy, the right statement will be returned.*/}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
