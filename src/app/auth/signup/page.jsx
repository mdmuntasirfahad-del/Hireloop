import React from 'react';
import SignUpPage from './SignUpPage';

export const metadata = {
    title: "Sign Up",
    description: "Create a new account on HireLoop to access job opportunities and connect with top companies.",
};

const SignUp = () => {
    return (
        <div>
            <SignUpPage></SignUpPage>
        </div>
    );
};

export default SignUp;