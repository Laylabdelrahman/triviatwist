//styled components
import {
    StyledFormArea,
    StyledFormButton,
    StyledTitle,
    colors,
    ButtonGroup,
    ExtraText,
    TextLink,
    CopyrightText,
} from './../components/Styles';

//logo
import Logo from "./../Assets/logo.png";

//formik
import { Formik, Form } from 'formik';
import { TextInput } from '../components/FormLib';
import * as Yup from 'yup';

//icons
import { GiLoveLetter, GiLockedHeart } from "react-icons/gi";

//loader
import { ThreeDots } from 'react-loader-spinner';

//axios
import axios from 'axios';

//auth & redux
import {connect} from "react-redux";
import { loginUser } from '../auth/actions/userActions';
import { useNavigate } from 'react-router-dom';

const Login = ({loginUser}) => {
const navigate = useNavigate();

  // Handle login
const handleLogin = async (values, setSubmitting, setFieldError) => {
    try {
      // Sending a POST request to your backend login endpoint
    const response = await axios.post("http://localhost:3000/user/signin", {
        email: values.email,
        password: values.password,
    });

      // Assuming the backend returns a JWT token on successful login
    const { token, user } = response.data;

      // Save the JWT token to localStorage or sessionStorage
    localStorage.setItem('token', token);

      // Optionally store user data in localStorage as well
    localStorage.setItem('user', JSON.stringify(user));

      // Navigate to the Dashboard or a protected route
    navigate("/dashboard");

    setSubmitting(false);
    } catch (error) {
    setSubmitting(false);
      // Handle error, e.g., invalid credentials
    setFieldError("email", "Invalid email or password.");
    }
};

return (
    <div>
    <StyledFormArea>
<div style={{ textAlign: 'center' }}>
    <img src={Logo} alt="logo.png" style={{ height: '150px' }} />
</div>

        <StyledTitle color={colors.primary} size={30}>Login to play</StyledTitle>

        <Formik
        initialValues={{
            email: "",
            password: "",
        }}
        validationSchema={
            Yup.object({
            email: Yup.string().email("Invalid email address").required("Required"),
            password: Yup.string().min(8, "Password is too short").max(30, "Password is too long").required("Required"),
            })
        }
        onSubmit={(values, { setSubmitting, setFieldError }) => {
        loginUser(values, navigate, setFieldError, setSubmitting);
        }}
        >
        {({ isSubmitting }) => (
            <Form>
            <TextInput
                name="email"
                type="text"
                label={<span style={{ color: 'white' }}>Email Address</span>}
                placeholder="name@example.com"
                icon={<GiLoveLetter />}
            />

            <TextInput
                name="password"
                type="password"
                label={<span style={{ color: 'white' }}>Password</span>}
                placeholder="********"
                icon={<GiLockedHeart />}
            />

            <ButtonGroup>
                {isSubmitting ? (
                <ThreeDots color={colors.pink} height={49} width={100} />
                ) : (
                <StyledFormButton type="submit">Login</StyledFormButton>
                )}
            </ButtonGroup>
            </Form>
        )}
        </Formik>

        <ExtraText>
        New here? <TextLink to="/signup">Sign up</TextLink>
        </ExtraText>
    </StyledFormArea>

    <CopyrightText>
        All rights reserved &copy; 2025
    </CopyrightText>
    </div>
);
}

export default connect(null, {loginUser})(Login);
