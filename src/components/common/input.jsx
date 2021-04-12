import React from "react";

//rest operator will include any other prop then defined
const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control" />
      {/* if error is truthy, the right statement will be returned.*/}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
