import React from "react";
import PropTypes from "prop-types";

export default function InputField({ label, value, onChange }) {
  return (
    <div className="relative w-full p-2 pt-6 bg-primary rounded-md">
      <input
        type="text"
        name="name"
        required
        className="peer w-full h-full text-base text-white bg-primary outline-none border-b-2 border-border-dark"
        value={value}
        onChange={(e) => onChange(e)}
      />
      <label
        html-for="name"
        className="absolute top-6 left-2 pointer-events-none text-sm text-white peer-valid:top-1 peer-focus:top-1 peer-focus:text-blue-500 peer-valid:text-blue-500 transition-all"
      >
        {label}
      </label>
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
