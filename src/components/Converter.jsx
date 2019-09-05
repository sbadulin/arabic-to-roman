import React, { useState, useEffect } from "react";
import { convertToRoman, ROMAN_NUMERALS_LIMIT } from "../utils/convertToRoman";
import { ConverterForm } from "./ConverterForm";
import { Result } from "./Result";
import "../styles.css";

export const Converter = ({ location, history }) => {
  // use browser URL API to parse query
  const params = new URLSearchParams(location.search);
  const query = params.get("roman");

  const [inputValue, setInputValue] = useState(query);
  const [romanNumeral, setRomanNumeral] = useState("");
  const [error, setError] = useState("");

  const handleOnChange = e => {
    const value = e.target.value;
    if (value <= ROMAN_NUMERALS_LIMIT.MAX || value < ROMAN_NUMERALS_LIMIT.MIN) {
      setInputValue(value);
    }
  };

  const handleSubmit = e => {
    // prevert page reload on submit
    e.preventDefault();
    // updating query if valid value is set
    if (inputValue) history.push({ search: `?roman=${inputValue}` });
  };

  // this effect will fire only when query is changed
  useEffect(() => {
    // imitating server query
    const fetchConvertedData = async () => {
      // setIsLoading(true);
      const result = await convertToRoman(query);
      if (result.error) {
        setRomanNumeral();
        setError(result.error);
      } else {
        setError();
        setRomanNumeral(result.roman);
      }
    };
    fetchConvertedData();
    // setIsLoading(false);
  }, [query]);

  return (
    <div className="stack">
      <h1>Convert Arabic numbers to&nbsp;Roman</h1>
      <ConverterForm {...{ handleOnChange, handleSubmit, inputValue }} />
      <Result {...{ romanNumeral, error }} />
    </div>
  );
};
