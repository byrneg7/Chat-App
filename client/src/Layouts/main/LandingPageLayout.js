import React from 'react';
import {withRouter} from "react-router-dom";

import './landingPageLayout.scss'
import LandingNav from "../../components/navigation/LandingNav";
import communicationIcon from '../../assets/images/svgs/communication.svg'

const LandingPageLayout = ({children, history}) => {
    return (
        <div className="landing-page-wrapper">
            <header className="landing-page-header">
                <LandingNav/>
            </header>

            <main className="landing-page-main shadow-sm">


                <div className='landing-page-text-container text-center'>
                    <span className='mb-3 border-bottom-shadow'>
                        <div className='font-heading font-weight-bold'> talking shite? </div>
                        <div className='font-20 font-subheading mb-2'> you've come to the right place </div>
                    </span>
                    <div className='sign-up-button mx-auto btn btn-primary' onClick={()=>history.push('/signup')}> Get Started</div>

                </div>

                <img src={communicationIcon} alt='people-on-phone-icon' className='d-none d-sm-inline-block'/>


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