import React from 'react';
import styles from "../styles/formfield.css";

const FormField = ({ labelName, placeholder, inputType, isTextArea, value, handleChange }) => {
  return (
    <label className={"input_label"}>
      {labelName && (
        <span className={"label_name"}>{labelName}</span>
      )}
      {isTextArea ? (
        <textarea 
          required
          value={value}
          onChange={handleChange}
          rows={4}
          placeholder={placeholder}
          className={"form_input"}
        />
      ) : (
        <input 
          required
          value={value}
          onChange={handleChange}
          type={inputType}
          step="0.1"
          placeholder={placeholder}
          className={"form_input"}
        />
      )}
    </label>
  )
}

export default FormField;