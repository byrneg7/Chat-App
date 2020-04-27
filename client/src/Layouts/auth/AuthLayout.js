import React from 'react';
import LandingNav from "../../components/navigation/LandingNav";

const AuthLayout = ({children}) => {
    return(
        <div>
            <LandingNav/>
            {children}
        </div>
    )
};

export default AuthLayout;