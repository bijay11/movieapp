import React, { Component } from "react";

const Input = ({ name, label, value, onChange }) => {
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
    </div>
  );
};

export default Input;
