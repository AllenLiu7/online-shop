import React from "react";
import "./form-input.styles.scss";

function FormInput({ handleChange, label, ...otherprops }) {
  return (
    <div className="group">
      <input
        className="form-input"
        onChange={handleChange}
        {...otherprops}
      ></input>
      {label ? (
        <label
          className={`${
            otherprops.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}
export default FormInput;
