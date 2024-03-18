import React, { useState } from "react";
import { TextField } from "@mui/material";

const validatePassword = (value: string): string | null => {
  if (!value) return "Password is required";

  const passwordRegex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  if (!passwordRegex.test(value)) return "Password must be longer than 8 characters with numbers and letters";

  return null;
};

const PasswordInputField: React.FC<{ value: string; onChange: (value: string, isValid: boolean) => void }> = ({ value, onChange }) => {
  const [error, setError] = useState<string | null>(null); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    onChange(newValue, !validatePassword(newValue)); 

    const errorMessage = validatePassword(newValue);
    setError(errorMessage);
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
        helperText={error || ""}
      />
    </div>
  );
};

export default PasswordInputField;
