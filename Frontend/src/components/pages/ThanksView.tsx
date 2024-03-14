import { ThemeProvider } from "@emotion/react";
import MainContainer from "../molecules/MainContainer";
import UpetIcon from "../utils/UpetIcon";
import theme from "../../Theme/Theme";
import MessageIcon from "../utils/MessageIcon";
import { useLocation } from "react-router-dom";

const ThanksView = () => {
    const location = useLocation();
    const { name, phone, email } = location.state;
    
    const mobileStyles = {
      marginTop: "5rem",
      "@media (maxWidth: 600px)": {
        marginTop: "0",
      }
    };
    
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <div style={{ ...mobileStyles }}>
          <UpetIcon />
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            fontSize: "22px",
            fontWeight: "400",
            marginBottom: "1rem",
            height: "90px",
          }}>
          <div style={{ marginTop: "1rem" }}>
            <MessageIcon />
          </div>

          <div>
            Thanks, {name}! <br></br>We’ve received <br></br>your application
          </div>
        </div>
        <div>
          <div>
            We’ll process your application as soon as possible and send you a
            decision within 30 days to {phone} or {email}.
            We will contact you in case more information is needed.
          </div>
          <div style={{ marginTop: "1rem" }}>
            While we’re reviewing your application, please don’t submit another
            application for the uPet’s breeder program.
          </div>
        </div>
      </MainContainer>
    </ThemeProvider>
  );
};

export default ThanksView;
