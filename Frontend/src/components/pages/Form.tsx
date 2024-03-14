import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, CircularProgress, ThemeProvider } from "@mui/material";
import MainContainer from "../molecules/MainContainer";
import UpetIcon from "../utils/UpetIcon";
import theme from "../../Theme/Theme";
import NameInputFields from "../molecules/NameInputField";
import PhoneInputField from "../molecules/PhoneInputField";
import EmailInputField from "../molecules/EmailInputField";
import PasswordInputField from "../molecules/PasswordField";
import { saveInDb } from "../hooks/SaveInDb";

function Form() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = () => {
    setIsButtonDisabled(!(name && lastName && phone && isEmailValid && isPasswordValid));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    const formData = {
      name,
      lastName,
      phone,
      email,
      password,
    };

    try {
      await saveInDb(formData);
      console.log("Data sent");
      navigate("/message", { state: { name, phone, email } });
    } catch (error) {
      console.error("Error sending the data:", error);
      setIsLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <div style={{ marginTop: "5rem" }}>
          <UpetIcon />
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <NameInputFields
            label="First name"
            value={name}
            onChange={(value) => {
              setName(value);
              handleInputChange();
            }}
          />
          <NameInputFields
            label="Last name"
            value={lastName}
            onChange={(value) => {
              setLastName(value);
              handleInputChange();
            }}
          />
        </div>
        <PhoneInputField
          value={phone}
          onChange={(value) => {
            setPhone(value);
            handleInputChange();
          }}
        />
        <EmailInputField
          value={email}
          onChange={(value, isValid) => {
            setEmail(value);
            setIsEmailValid(isValid);
            handleInputChange();
          }}
        />
        <PasswordInputField
          value={password}
          onChange={(value, isValid) => {
            setPassword(value);
            setIsPasswordValid(isValid);
            handleInputChange();
          }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
          disabled={isButtonDisabled}
          sx={{
            height: "60px",
            borderRadius: "2px",
            color: "white",
            ...(isButtonDisabled && {
              "&:disabled": {
                backgroundColor: "rgba(2, 224, 177, 0.3)",
              },
            }),
          }}
        >
          {isLoading ? (
            <CircularProgress size={24} color="inherit" sx={{ color: "#02E0B1" }} />
          ) : (
            "Next"
          )}
        </Button>
      </MainContainer>
    </ThemeProvider>
  );
}

export default Form;
