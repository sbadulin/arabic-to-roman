import React from "react";

export const Result = ({ romanNumeral, error }) => {
  if (romanNumeral) {
    return <p>Roman numeral is {romanNumeral}</p>;
  } else if (error) {
    return <p>{error}</p>;
  }
  return null;
};
