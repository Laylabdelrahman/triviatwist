import React from 'react';
import {Link} from "react-router-dom";
import {
    StyledTitle,
    StyledButton,
    TwoSquareContainer,
    Square,
    NavBar,
    PlayButton,
    
} from "../components/Styles"; // Adjust the import path as necessary

//import { Avatar } from '../components/styles';
import Logo from "./../Assets/logo.png";

import { IoMdArrowRoundBack } from "react-icons/io";

import sportsbg from "./../Assets/sportsbg.jpg";
import musicbg from "./../Assets/musicbg.jpg";
import moviebg from "./../Assets/moviebg.avif";
import mathbg from "./../Assets/mathbg.jpg";
import randombg from "./../Assets/randombg.jpg";


const TopicDashboard = () => {
    return (
        <> 
        
            <NavBar>
                <img src={Logo} alt="logo.png" style={{ height: '40px' }} /> {/* Optional logo */}
                <div style={{color: 'colors.pink'}} >TriviaTwist</div> {/* Title in the center */}
                <StyledButton to="#">Logout</StyledButton>
            </NavBar>

            <TwoSquareContainer>

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', marginRight: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                        <Link to="/PreviousPage" style={{ textDecoration: 'none' }}>
                            <IoMdArrowRoundBack style={{ fontSize: '30px', color: 'black' }} /> {/* Adjusted size and color */}
                        </Link>
                    </div>
                    <div>
                        <StyledTitle style={{ lineHeight: '30px', margin: 0 }}>Choose a Topic</StyledTitle> {/* Ensure title aligns with icon */}
                    </div>
                </div>

                
                <Square style={{ backgroundImage: `url(${musicbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <h3 style={{ color: 'black' }}>Music</h3>
                    <PlayButton to="/Music" >Play Now</PlayButton>
                </Square>
                <Square style={{ backgroundImage: `url(${moviebg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <h3 style={{ color: 'black' }}>Movies/TV Shows</h3>
                    <PlayButton to="/Movies" >Play Now</PlayButton>
                </Square>
                <Square style={{ backgroundImage: `url(${sportsbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <h3 style={{ color: 'black' }}>Sports</h3>
                    <PlayButton to="/Sports" >Play Now</PlayButton>
                </Square>
                <Square style={{ backgroundImage: `url(${mathbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <h3 style={{ color: 'black' }}>Math</h3>
                    <PlayButton to="/Math" >Play Now</PlayButton>
                </Square>
                <Square style={{ backgroundImage: `url(${randombg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <h3 style={{ color: 'black' }}>Random</h3>
                    <PlayButton to="/Random" >Play Now</PlayButton>
                </Square>
            </TwoSquareContainer>
        </>
    );
};

export default TopicDashboard;