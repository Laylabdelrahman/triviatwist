import {
        StyledButton,
        TwoSquareContainer,
        Square,
        NavBar,
        GreyedOutButton,
        Square1,
    } from "../components/Styles";

//logo
import Logo from "./../Assets/logo.png";



    const Dashboard = () => {
    //const handlePlayNow = () => {
        // Add your play now logic here
   //     alert("Playing Offline!");
   // };

    return (
        <>
        <NavBar>
                <img src={Logo} alt="logo.png" style={{ height: '40px' }} /> {/* Optional logo */}
                <div style={{color: 'colors.primary'}} >TriviaTwist</div> {/* Title in the center */}
                <StyledButton to="#">Logout</StyledButton>
            </NavBar>

        <TwoSquareContainer>
            <Square>
                <h3 style={{margin: '10px 0' }}>Play Offline</h3>
                <p style={{margin: '10px 0' }}>Level Tracker: Level 2</p>
                <StyledButton style={{margin: '10px 0' }} to="/TopicDashboard">Play Now</StyledButton>
            </Square>
            <Square1>
                <h3 style={{margin: '10px 0' }}>Live games</h3>
                <GreyedOutButton style={{margin: '10px 0' }}>Coming soon</GreyedOutButton>   
            </Square1>
            
        </TwoSquareContainer>
        </>
    );
};

export default Dashboard;