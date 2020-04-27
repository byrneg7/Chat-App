import React from 'react';
import {Button} from '@material-ui/core'
import {withRouter} from "react-router-dom";

import './landingPageLayout.scss'
import MainNav from "../../components/navigation/MainNav";

const LandingPageLayout = ({children, history}) => {
    return (
        <div className="landing-page-wrapper">
            <header className="landing-page-header">
                <MainNav/>
            </header>

            <main className="landing-page-main shadow-sm">

                <div className='landing-page-text-container font-huge font-weight-bold'>
                    Lorem Ipsum
                </div>

                <div className='landing-page-button-container'>
                    <Button variant="contained"
                            className='shadow-md mb-2 mb-sm-0 d-block d-sm-inline-block banner-button mr-1'
                            onClick={() => history.push('/get-started')}>
                        Get Started
                    </Button>

                    <Button variant="contained" className='shadow-md mr-2 d-block d-sm-inline-block banner-button ml-1'
                            color="secondary" onClick={() => history.push('/signup')}>
                        Sign Up
                    </Button>
                </div>

            </main>

            <main className="landing-page-secondary">
                {children}
            </main>

            <footer className="page-footer">
                footer
            </footer>
        </div>
    )
};

export default withRouter(LandingPageLayout);