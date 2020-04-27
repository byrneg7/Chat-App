import React from 'react';

import './mainLayout.scss'

const LandingPageLayout = ({children}) => {
    return (
        <div className="wrapper">
            <header className="page-header">
                header
            </header>
            <main className="page-main">
                {children}
            </main>
            <footer className="page-footer">
                footer
            </footer>
        </div>
    )
};

export default LandingPageLayout;