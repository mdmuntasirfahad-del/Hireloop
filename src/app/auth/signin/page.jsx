import React from 'react';
import SignInPage from './SignInPage';

export const metadata = {
    title: "Sign In",
    description: "Access your HireLoop account to explore job opportunities and connect with top companies.",
};

const SignIn = () => {
    return (
        <div>
            <SignInPage></SignInPage>
        </div>
    );
};

export default SignIn;