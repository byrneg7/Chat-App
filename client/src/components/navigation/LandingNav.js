import React from 'react';
import {Link, withRouter} from "react-router-dom";

import './landingNav.scss';
import chatBotIcon from '../../assets/images/svgs/chatbot.svg';

const LandingNav = ({history}) => {
    return (
        <ul className="landing-nav shadow-lg">

            <li className='my-auto'>
                <a href="#" className=''>
                    <img src={chatBotIcon} alt='chat-robot-icon my-auto' className='img-fluid landing-nav-icon'/>
                </a>
            </li>

            <li className='my-2 font-heading cursor-pointer' onClick={() => history.push('/')}>
                sh!t talk
            </li>

            <li className='my-auto'>
                <Link to='/login' className='mx-2 my-auto brand-link'>
                    login
                </Link>
            </li>

        </ul>
    );
};

export default withRouter(LandingNav);