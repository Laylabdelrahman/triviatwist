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
import { TbCat } from "react-icons/tb";

//loader
import { ThreeDots } from 'react-loader-spinner';

//auth & redux
import { connect } from "react-redux";
import { loginUser, signupUser } from '../auth/actions/userActions';
import { useNavigate } from 'react-router-dom';

const Signup = ({ signupUser }) => {
    const navigate = useNavigate();

    return (
        <div>
            <StyledFormArea>
                <div style={{ textAlign: 'center' }}>
                    <img src={Logo} alt="logo.png" style={{ height: '150px' }} />
                </div>

                <StyledTitle color={colors.primary} size={30}>Let's play</StyledTitle>

                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        password: "",
                        repeatPassword: "",
                    }}

                    validationSchema={
                        Yup.object({
                            email: Yup.string().email("Invalid email address").required("Required"),
                            password: Yup.string().min(8, "Password is too short").max(30, "Password is too long").required("Required"),
                            name: Yup.string().required("Required"),
                            repeatPassword: Yup.string().required("Required").oneOf([Yup.ref("password")], "Password must match")
                        })
                    }
                    onSubmit={(values, { setSubmitting, setFieldError }) => {
                        loginUser(values, navigate, setFieldError, setSubmitting);
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
                                {!isSubmitting ? (
                                    <StyledFormButton type="submit">Signup</StyledFormButton>
                                ) : (
                                    <ThreeDots color={colors.pink} height={49} width={100} />
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
}

export default connect(null, { signupUser })(Signup);
