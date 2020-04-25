import React from 'react';
import { Route } from 'react-router-dom';

import { testGET, testPOST } from '../utils/api/testRoutes';
import Welcome from './Welcome'
import Example from './Example'

class App extends React.Component {
  componentDidMount(){
    testGET();
    testPOST();
  }
  render(){
    return (
      <div>
        <Route path="/" exact component={Welcome} />
        <Route path="/Example" exact component={Example} />
      </div>
    );
  }
  }

export default App;
