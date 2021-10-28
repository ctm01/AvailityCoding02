import React from "react";

const Input = props => {
  console.log(props.value);
  return (
    <div className="form-group">
      <label for={props.firstname} className="form-label">
        {props.title}
      </label>
      &nbsp;&nbsp;&nbsp;
      <input
        className="form-control"
        id={props.name}
        name={props.name}
        type={props.inputType}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        {...props}
      />
    </div>
  );
};

export default Input;
