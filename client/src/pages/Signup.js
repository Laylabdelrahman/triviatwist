import {
  StyledTextInput,
  StyledFormArea,
  StyledFormButton,
  StyledTitle,
  colors,
  ButtonGroup,
  ExtraText,
  TextLink,
  CopyrightText,
} from './../components/Styles';

import Logo from "./../Assets/logo.png";

//formik
import { Formik, Form } from 'formik';
import { TextInput } from '../components/FormLib';
import * as Yup from 'yup';

//loader
import { ThreeDots } from 'react-loader-spinner';

//icons
import { GiLoveLetter, GiLockedHeart } from "react-icons/gi";
import { TbCat } from "react-icons/tb";

// React Router
import axios from 'axios';

//auth & redux
import {connect} from "react-redux";
import { signupUser } from '../auth/actions/userActions';
import { useNavigate } from 'react-router-dom';


const Signup = ({signupUser}) => {
  const navigate = useNavigate();

  // Handle signup
  const handleSignup = async (values, setSubmitting, setFieldError) => {
    try {
      const response = await axios.post("http://localhost:3000/user/signup", {
        email: values.email,
        name: values.name,
        password: values.password,
      });

      setSubmitting(false);

      // If signup is successful, redirect to the verification page
      navigate("/verification"); // Updated to use 'navigate' instead of 'history.push'
    } catch (error) {
      setSubmitting(false);
      setFieldError("email", error.response?.data?.error || "An error occurred during signup.");
    }
  };

  return (
    <div>
      <StyledFormArea>
        <div style={{ textAlign: 'center' }}>
          <img src={Logo} alt="logo.png" style={{ height: '150px' }} />
        </div>

        <StyledTitle color={colors.primary} size={30}>Sign up to Play</StyledTitle>

        <Formik
          initialValues={{
            email: "",
            name: "",
            password: "",
            repeatPassword: "",
          }}
          validationSchema={
            Yup.object({
              email: Yup.string().email("Invalid email address").required("Required"),
              password: Yup.string()
                .min(8, "Password is too short")
                .max(30, "Password is too long")
                .required("Required"),
              name: Yup.string().required("Required"),
              repeatPassword: Yup.string().required("Required").oneOf([Yup.ref("password")], "Passwords must match"),
            })
          }
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            signupUser(values, navigate, setSubmitting, setFieldError);
          }}
        >

          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="name"
                type="text"
                label={<span style={{ color: 'white' }}>Full Name</span>}
                placeholder="Your Name"
                icon={<TbCat />}
              />

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

              <TextInput
                name="repeatPassword"
                type="password"
                label={<span style={{ color: 'white' }}>Repeat Password</span>}
                placeholder="********"
                icon={<GiLockedHeart />}
              />

              <ButtonGroup>
                {isSubmitting ? (
                  <ThreeDots color={colors.primary} height={49} width={100} />
                ) : (
                  <StyledFormButton type="submit">Signup</StyledFormButton>
                )}
              </ButtonGroup>
            </Form>
          )}
        </Formik>

        <ExtraText>
          Played Before? <TextLink to="/login">Login</TextLink>
        </ExtraText>
      </StyledFormArea>

      <CopyrightText>
        All rights reserved &copy; 2025
      </CopyrightText>
    </div>
  );
};

export default connect(null, {signupUser})(Signup);
