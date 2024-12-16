import styled from "styled-components";
import background from './../Assets/bg.png';
import { Link } from "react-router-dom";

export const colors = {
    primary: "#fff",
    theme: "#BE185D",
    light1: "#f3f4f6",
    light2: "#e5e7eb",
    dark1: "#1f2937",
    dark2: "#4b5563",
    dark3: "#9cca3af",
    pink: "#FFB6C1",
    red: "#FFcbd1",
};

// Define breakpoints for responsiveness
const breakpoints = {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px'
};

// Styled Container
export const StyledContainer = styled.div`
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to top left, rgba(255, 255, 255, 0.9), rgba(255, 200, 200, 0.9));
    background-size: cover;
    background-attachment: fixed;

    @media (max-width: ${breakpoints.tablet}) {
        flex-direction: column;
    }
`;

// Home Title
export const StyledTitle = styled.h2`
    position: relative;
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.dark1};
    padding: 5px;
    margin-bottom: 20px;

    @media (max-width: ${breakpoints.tablet}) {
        font-size: ${(props) => props.size * 0.8}px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        font-size: ${(props) => props.size * 0.6}px;
    }
`;


export const StyledLabel = styled.p` 
text-align: left;
    font-size: 13px;
    font-weight: medium;`
   
;

// Home Subtitle
export const StyledSubTitle = styled.p`
    font-size: ${(props) => props.size}px;
    text-align: center;
    color: ${(props) => props.color ? props.color : colors.dark1};
    padding: 5px;
    margin-bottom: 25px;

    @media (max-width: ${breakpoints.tablet}) {
        font-size: ${(props) => props.size * 0.8}px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        font-size: ${(props) => props.size * 0.6}px;
    }
`;

// Avatar
export const Avatar = styled.div`
    width: 85px;
    height: 85px;
    border-radius: 50px;
    background-image: url(${props => props.image});
    background-size: cover;
    background-position: center;
    margin: auto;

    @media (max-width: ${breakpoints.tablet}) {
        width: 70px;
        height: 70px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        width: 60px;
        height: 60px;
    }
`;

// Styled Button
export const StyledButton = styled(Link)`
    padding: 10px;
    width: 150px;
    background-color: transparent;
    font-size: 16px;
    border: 3px solid ${colors.pink};
    border-radius: 25px;
    color: ${colors.pink};
    text-decoration: none;
    text-align: center;
    transition: ease-in-out 0.3s;

    &:hover {
        background-color: ${colors.pink};
        color: ${colors.primary};
        cursor: pointer;
    }

    @media (max-width: ${breakpoints.tablet}) {
        width: 130px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        width: 120px;
        font-size: 14px;
    }
`;

// Button Group
export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    margin-top: 25px;

    @media (max-width: ${breakpoints.tablet}) {
        flex-direction: column;
        align-items: center;
    }
`;

// Styled Text Input
export const StyledTextInput = styled.input`
    width: 350px;
    padding: 12px;
    padding-left: 50px;
    font-size: 17px;
    letter-spacing: 1px;
    color: ${colors.light3};
    border-radius: 30px;
    display: block;
    margin: 5px auto 10px auto;
    transition: ease-in-out 0.3s;

    ${(props) => props.invalid && `background-color: ${colors.red}; color: ${colors.primary}; `}

    &:focus {
        background-color: ${colors.dark2};
        color: ${colors.primary};
    }

    @media (max-width: ${breakpoints.tablet}) {
        width: 280px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        width: 90%;
    }
`;

// Styled Form Area
export const StyledFormArea = styled.div`
    background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
    text-align: "center";
    padding: 45px 100px;
    border-radius: 10px;

    @media (max-width: ${breakpoints.tablet}) {
        padding: 35px 50px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        padding: 25px 20px;
    }
`;

// Styled Form Button
export const StyledFormButton = styled.button`
    padding: 12px;
    width: 350px;
    background-color: transparent;
    font-size: 16px;
    outline: 0;
    border: 2px solid ${colors.pink};
    border-radius: 25px;
    color: ${colors.pink};
    transition: ease-in-out 0.3s;

    &:hover {
        background-color: ${colors.pink};
        outline: 0;
        color: ${colors.primary};
        cursor: pointer;
    }

    @media (max-width: ${breakpoints.tablet}) {
        width: 280px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        width: 90%;
    }
`;

// Error Message
export const ErrorMsg = styled.div`
    font-size: 11px;
    color: ${colors.red};
    margin-top: -5px;
    margin-bottom: 10px;
    text-align: left;
`;

// Extra Text
export const ExtraText = styled.p`
    font-size: 11px;
    text-align: center;
    color: ${(props) => (props.color ? props.color : colors.primary)};
    padding: 2px;
    margin-top: 10px;
`;

// Text Link
export const TextLink = styled(Link)`
    text-decoration: none;
    color: ${colors.pink};
    transition: ease-in-out 0.3s;

    &:hover {
        text-decoration: none;
        letter-spacing: 2px;
        font-weight: bold;
    }
`;

// Styled Icon
export const StyledIcon = styled.p`
    color: ${colors.dark1};
    position: absolute;
    font-size: 21px;
    top: 35px;

    ${(props) => props.right && `right: 15px;`};
    ${(props) => !props.right && `left: 15px;`};
`;

// Copyright Text
export const CopyrightText = styled.p`
    padding: 5px;
    margin: 20px;
    text-align: center;
    color: ${colors.dark1};
`;

// Two Square Container
export const TwoSquareContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px 0;
    padding: 10px;

    @media (max-width: ${breakpoints.tablet}) {
        margin: 50px 0;
    }

    @media (max-width: ${breakpoints.mobile}) {
        margin: 30px 0;
    }
`;

// Square
export const Square = styled.div`
    flex: 1;
    margin: 15px;
    padding: 70px;
    background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
    text-align: center;
    min-width: 1100px;

    @media (max-width: ${breakpoints.tablet}) {
        min-width: 300px;
        height: 80px;
    }

    @media (max-width: ${breakpoints.mobile}) {
        min-width: 220px;
        height: 70px;
    }
`;


export const Square1 = styled.div`
    flex: 1; // Each square takes equal space
    margin: 15px; // Optional margin between squares
    padding: 70px; // Padding inside each square
    background: linear-gradient(0deg, rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background});
    border-radius: 8px; // Rounded corners
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); // Optional shadow for depth
    display: flex;
    flex-direction: column; // Stack content vertically
    align-items: center; // Center content horizontally
    justify-content: center; // Center content vertically
    height: 100px; // Fixed height to make it square
    text-align: center; // Center text
    min-width: 1100px; // Optional: Set a minimum width for the squares

    // Grayed out styles
    opacity: 0.5; // Reduce opacity to indicate it's disabled
    background: linear-gradient(68.4deg, rgb(200, 200, 200) 0.5%, rgb(180, 180, 180) 49%, rgb(190, 190, 190) 99.8%); // Change background to gray
    color: #fff; // Change text color to a lighter gray
    pointer-events: none; // Disable pointer events

    @media (max-width: 768px) {
        padding: 50px; // Reduce padding on smaller screens
        height: 80px; // Adjust height on smaller screens
        min-width: 300px; // Set a smaller min-width
    }

    @media (max-width: 480px) {
        padding: 30px; // Further reduce padding for very small screens
        height: 60px; // Adjust height for smaller screens
    }
`;

// Navigation Bar
export const NavBar = styled.div`
    display: flex;
    justify-content: space-between; // Space between title and button
    align-items: center; // Center items vertically
    padding: 10px 20px; // Padding around the nav bar
    background-color: transparent; // Background color for the nav bar
    color: white; // Text color
    font-size: 1.2em; // Font size
    position: fixed; // Fix the navbar to the top
    top: 0; // Position it at the top
    left: 0; // Align to the left
    right: 0; // Align to the right
    z-index: 1000; // Ensure it stays above other content

    @media (max-width: 768px) {
        font-size: 1em; // Reduce font size on smaller screens
        padding: 10px 15px; // Adjust padding for smaller screens
    }
`;

// Timer Circle
export const TimerCircle = styled.div`
    width: 60px; // Diameter of the circle
    height: 60px; // Diameter of the circle
    border-radius: 50%; // Make it circular
    display: flex;
    align-items: center; // Center the text vertically
    justify-content: center; // Center the text horizontally
    font-size: 20px; // Font size for the timer text
    color: ${colors.primary}; // Text color
    background-color: ${({ time }) => {
        if (time > 10) return 'green'; // Green for more than 10 seconds
        if (time > 7) return 'yellow'; // Yellow for 7 to 10 seconds
        return 'red'; // Red for 0 to 7 seconds
    }};
    transition: background-color 0.3s; // Smooth transition for color change

    @media (max-width: 768px) {
        width: 50px; // Reduce size for smaller screens
        height: 50px; // Reduce size for smaller screens
        font-size: 16px; // Smaller font size
    }
`;

// Quiz Styles
export const QuizContainer = styled.div`
    background-color: rgba(255, 255, 255, 0.8); // Light background for quiz
    border-radius: 10px; // Rounded corners
    padding: 20px; // Padding inside the quiz container
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2); // Shadow for depth
    width: 400px; // Fixed width for the quiz
    text-align: center; // Center text
    margin: auto; // Center the quiz container on the page

    @media (max-width: 768px) {
        width: 80%; // Make quiz container responsive on smaller screens
        padding: 15px; // Adjust padding
    }

    @media (max-width: 480px) {
        width: 90%; // Adjust width for very small screens
        padding: 10px; // Reduce padding further
    }
`;

export const QuestionText = styled.div`
    font-size: 24px; // Increased font size for question text
    margin-bottom: 20px; // Space below the question
    color: ${colors.dark1}; // Dark color for question text
    font-weight: bold; // Bold text for emphasis

    @media (max-width: 768px) {
        font-size: 20px; // Reduce font size on smaller screens
        margin-bottom: 15px; // Adjust margin
    }
`;

export const AnswerButton = styled.button`
    display: block; // Make buttons block elements
    width: 100%; // Full width for buttons
    padding: 15px; // Increased padding for buttons
    margin: 10px 0; // Margin between buttons
    background-color: ${colors.theme}; // Theme color for buttons
    color: ${colors.primary}; // Text color
    border: none; // No border
    border-radius: 5px; // Rounded corners
    cursor: pointer; // Pointer cursor on hover
    transition: background-color 0.3s; // Transition for hover effect
    font-size: 18px; // Font size for button text

    &:hover {
        background-color: ${colors.pink}; // Change color on hover
    }

    @media (max-width: 768px) {
        padding: 12px; // Adjust padding for smaller screens
        font-size: 16px; // Smaller font size
    }
`;

export const ScoreSection = styled.div`
    font-size: 24px; // Increased font size for score display
    color: ${colors.dark1}; // Dark color for score text
    margin-top: 20px; // Space above score

    @media (max-width: 768px) {
        font-size: 20px; // Reduce font size on smaller screens
    }
`;

export const PlayButton = styled(Link)`
    display: block; // Make buttons block elements
    width: 150px; // Fixed width for buttons
    padding: 15px; // Increased padding for buttons
    margin: 10px 0; // Margin between buttons
    background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.9), rgba(255, 200, 200, 0.9));    
    color: black; // Indigo text color for contrast
    border: none; // No border
    border-radius: 5px; // Rounded corners
    cursor: pointer; // Pointer cursor on hover
    transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s; // Transition for hover effect
    font-size: 18px; // Font size for button text
    text-decoration: none; // Remove underline from links
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); // Drop shadow for 3D effect

    &:hover {
        background-color: rgba(255, 105, 180, 0.9); // Hot pink with transparency for hover effect
        transform: scale(1.05); // Slightly scale up on hover for effect
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); // Darker shadow on hover for more depth
    }

    @media (max-width: 768px) {
        width: 120px; // Adjust width for smaller screens
        font-size: 16px; // Smaller font size
    }
`;

export const GreyedOutButton = styled.button`
    background-color: '#d3d3d3'; // Light gray background
    color: '#a9a9a9'; // Darker gray text
    border: '1px solid #a9a9a9'; // Gray border
    padding: 10px;
    width: 150px;
    border-radius: 25px;
    font-size: 16px;
    cursor: 'not-allowed'; // Change cursor to indicate it's not clickable
    opacity: 0.6; // Reduce opacity
    pointer-events: 'none'; // Disable pointer events

    @media (max-width: 768px) {
        width: 120px; // Adjust width for smaller screens
        font-size: 14px; // Smaller font size
    }
`;
