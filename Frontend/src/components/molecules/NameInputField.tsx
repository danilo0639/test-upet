import { ChangeEvent } from 'react';
import { TextField } from "@mui/material";

interface NameInputFieldsProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const NameInputFields = ({ label, value, onChange }: NameInputFieldsProps) => {
  const handleInputChange = (inputValue: string) => {
    onChange(capitalizeFirstLetter(inputValue));
  };

  const capitalizeFirstLetter = (input: string): string => {
    return input.charAt(0).toUpperCase() + input.slice(1);
  };

  return (
    <div style={{ flex: 1, marginRight: "0.5rem", marginBottom: "1rem" }}>
      <TextField
        label={label}
        variant="outlined"
        fullWidth
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleInputChange(e.target.value)}
      />
    </div>
  );
};

export default NameInputFields;
