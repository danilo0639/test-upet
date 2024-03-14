import { useState } from "react";
import { TextField, InputAdornment } from "@mui/material";
import UsaFlagIcon from "../utils/UsaFlagIcon";

const PhoneInputField = ({ value, onChange }: { value: string; onChange: (phoneNumber: string) => void }) => {
  const [phoneNumber, setPhoneNumber] = useState(value);

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    value = value.replace(/\D/g, "");
    value = value.slice(0, 10);
    const formattedValue = formatPhoneNumber(value);
    setPhoneNumber(formattedValue);
    onChange(formattedValue);
  };

  const formatPhoneNumber = (value: string) => {
    const formattedValue = value
      .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")
      .trim();
    return formattedValue;
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <TextField
        id="phone"
        label="Phone number"
        variant="outlined"
        fullWidth
        value={phoneNumber}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <UsaFlagIcon />
            </InputAdornment>
          )
        }}
        onChange={handleNumberChange}
      />
    </div>
  );
};

export default PhoneInputField;
