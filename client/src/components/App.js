import React, {useEffect} from 'react';

import {testGET, testPOST} from '../utils/api/testRoutes';
import Router from '../routes/Router';

const App = () => {
    useEffect(() => {
        testGET();
        testPOST();
    }, []);

    return (
        <>
            <Router/>
        </>
    );
};

export default App;
