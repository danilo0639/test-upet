import React, { useState } from "react";
import { TextField } from "@mui/material";

const EmailInputField: React.FC<{ value: string; onChange: (value: string) => void }> = ({ value, onChange }) => {
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (value.length === 1) {
      value = value.toLowerCase();
    }

    onChange(value);

    const emailRegex: RegExp = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

    if (!emailRegex.test(value)) {
      setError("Invalid email address");
    } else {
      setError("");
    }
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
        error={!!error}
        helperText={error}
      />
    </div>
  );
};

export default EmailInputField;
