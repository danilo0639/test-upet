import React, { useState } from "react";
import { TextField } from "@mui/material";

const PasswordInputField: React.FC<{ value: string; onChange: (value: string) => void }> = ({ value, onChange }) => {
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange(value);
    
    const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if (!passwordRegex.test(value)) {
      setError(
        "Oops! You need a password longer than 8 characters with numbers and letters.")
    } else {
      setError("");
    }
  };

  return (
    <div style={{ marginBottom: "2rem" }}>
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        fullWidth
        type="password"
        value={value}
        onChange={handleChange}
        error={!!error}
        helperText={error}
      />
    </div>
  );
};

export default PasswordInputField;
