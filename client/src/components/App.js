import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';

import {testGET, testPOST} from '../utils/api/testRoutes';
import Welcome from './Welcome'
import Example from './Example'

const App = () => {
    useEffect(() => {
        testGET();
        testPOST();
    }, []);

    return (
        <div>
            <Route path="/" exact component={Welcome}/>
            <Route path="/Example" exact component={Example}/>
        </div>
    );
}

export default App;
