import React, { useState } from "react";
import { TextField } from "@mui/material";

const EmailInputField: React.FC<{ value: string; onChange: (value: string, isValid: boolean) => void }> = ({ value, onChange }) => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;

    // Convertir la primera letra a minúscula
    if (newValue.length === 1) {
      newValue = newValue.toLowerCase();
    }

    const isValidEmail = validateEmail(newValue);

    setIsValid(isValidEmail);
    setErrorMessage(isValidEmail ? "" : "Invalid email address");

    onChange(newValue, isValidEmail);
  };

  const validateEmail = (value: string): boolean => {
    const emailRegex: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    return emailRegex.test(value);
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        fullWidth
        value={value}
        onChange={handleChange}
        error={!isValid}
        helperText={errorMessage}
      />
    </div>
  );
};

export default EmailInputField;
