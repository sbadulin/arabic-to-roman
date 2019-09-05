import React from "react";
export const ConverterForm = ({ handleSubmit, handleOnChange, inputValue }) => (
  <form onSubmit={handleSubmit} className="converter">
    <input
      value={inputValue || ""}
      size="4"
      type="number"
      onChange={handleOnChange}
    />
    <button>Convert</button>
  </form>
);
