import {StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonGroup} from "../components/Styles";

//logo
import Logo from "./../Assets/logo.png";

const Home = () => {
     console.log("Home component rendered"); 
    return(
        <div >
            <div
            style={{
           position: "relative",
           top: 0,
           left: 0,
           backgroundColor: "transparent",
           width: "100%",
           padding: "0px",
           display: "flex",
           justifyContent: "flex-start",
           alignItems: "center",
        }}>
          
            </div>
                  <div style={{ textAlign: 'center' }}>
    <img src={Logo} alt="logo.png" style={{ height: '150px' }} />
</div>  
            <StyledTitle size={65}>
                Welcome to Trivia Twist!
            </StyledTitle>
            <StyledSubTitle size={27}>
                Let's play some games!
            </StyledSubTitle>

            <ButtonGroup>
                <StyledButton to="/login">Login</StyledButton>
            <StyledButton to="/signup">Signup</StyledButton>
            </ButtonGroup>
        </div>
    );
};

export default Home;