import { useState } from "react";
import { useField } from "formik";

import {
    StyledTextInput,
    StyledLabel,
    StyledIcon,
    ErrorMsg,
} from "./../components/Styles";

// Eye icons for password visibility toggle
import { FiEyeOff, FiEye } from "react-icons/fi";

export const TextInput = ({ icon, ...props }) => {
    const [field, meta] = useField(props); // Hook from Formik to handle input field
    const [show, setShow] = useState(false); // Local state to control password visibility

    return (
        <div style={{ position: "relative" }}>
            {/* Label for input */}
            <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>

            {/* TextInput for regular fields */}
            {props.type !== "password" && (
                <StyledTextInput
                    invalid={meta.touched && meta.error} // Conditional styling for errors
                    {...field}
                    {...props}
                />
            )}

            {/* TextInput for password field with toggle visibility */}
            {props.type === "password" && (
                <StyledTextInput
                    invalid={meta.touched && meta.error} // Conditional styling for errors
                    {...field}
                    {...props}
                    type={show ? "text" : "password"} // Toggle password visibility
                />
            )}

            {/* Icon for input field */}
            <StyledIcon>{icon}</StyledIcon>

            {/* Password visibility toggle */}
            {props.type === "password" && (
                <StyledIcon onClick={() => setShow(!show)} right>
                    {show ? <FiEye /> : <FiEyeOff />}
                </StyledIcon>
            )}

            {/* Error message display */}
            {meta.touched && meta.error ? (
                <ErrorMsg>{meta.error}</ErrorMsg>
            ) : (
                <ErrorMsg style={{ visibility: "hidden" }}>.</ErrorMsg>
            )}
        </div>
    );
};
