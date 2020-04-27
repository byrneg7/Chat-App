import React from 'react';
import {Button} from '@material-ui/core'

import './landingPageLayout.scss'

const LandingPageLayout = ({children}) => {
    return (
        <div className="landing-page-wrapper">
            <header className="page-header">
                header
            </header>
            <main className="landing-page-main shadow-sm">

                <div className='landing-page-text-container font-huge font-weight-bold'>
                    <div className='ml-3 mr-4'>
                        Welcome text
                    </div>
                </div>

                <div className='landing-page-button-container'>
                    <Button variant="contained" className='shadow-md mb-2 mb-sm-0 d-block d-sm-inline-block banner-button mr-1'>
                        Get Started
                    </Button>

                    <Button variant="contained" className='shadow-md mr-2 d-block d-sm-inline-block banner-button ml-1' color="primary">
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

export default LandingPageLayout;