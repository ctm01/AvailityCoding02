import React from "react";

const Registrations = props => {
  return (
    <div className="form-group">
      <label for={props.name}> {props.title} </label>
      
      <ol>
        {props.value.map((user) => (
            <li>{user}</li>
        ))}
        </ol>
      
    </div>
  );
};

export default Registrations;
