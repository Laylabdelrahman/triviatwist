import axios from 'axios';
import { sessionService } from 'redux-react-session';

// Function to handle user login
export const loginUser = (credentials, navigate, setFieldError, setSubmitting) => {
    // Send a POST request to the server
    axios
        .post(
            "https://cryptic-thicket-02317-daaef0ab6ba9.herokuapp.com/user/signin",
            credentials,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        .then((response) => {
            const { data } = response;

            if (data.status === "Failed") {
                const { message } = data;

                // Handle specific error messages
                if (message.includes("credentials")) {
                    setFieldError("email", message);
                    setFieldError("password", message);
                } else if (message.includes("password")) {
                    setFieldError("password", message);
                }
            } else if (data.status === "Success") {
                const userData = data.data[0];
                const token = userData._id;

                // Save session and user data
                sessionService
                    .saveSession(token)
                    .then(() => {
                        sessionService
                            .saveUser(userData)
                            .then(() => {
                                navigate.push("/dashboard");
                            })
                            .catch((err) => console.error("Error saving user:", err));
                    })
                    .catch((err) => console.error("Error saving session:", err));
            }

            // Complete form submission
            setSubmitting(false);
        })
        .catch((err) => {
            console.error("Login error:", err);
            setSubmitting(false); // Ensure submission is marked complete even on error
        });
};

// Placeholder for signup function
export const signupUser = (credentials, navigate, setFieldError, setSubmitting) => {
    // Add your signup logic here
};

// Placeholder for logout function
export const logoutUser = () => {
    // Add your logout logic here
}; 
