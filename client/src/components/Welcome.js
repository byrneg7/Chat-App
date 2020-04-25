import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return(
    <div>
       <h1>React/Express Fullstack Template. Greg Byrne</h1>
        <p> This is a boilerplate React / Express fullstack app which has the following configurations:</p>
        <ul>
          <li>Express backend</li>
          <li>React frontend</li>
          <li>Redux</li>
          <li>Redux Form</li>
          <li>React Router</li>
          <li>Axios requests to backend on app startup</li>
          <li>Dynamic keys</li>
          <li>Need to add server/config/dev.js for dev environment keys- gitignored by default</li>
        </ul>
        <p> To run in dev mode: </p> 
        <ul>
          <li>npm run dev</li>
        </ul>
        <p> To run in prod mode:</p> 
        <ul>
          <li>heroku create app_name</li>
          <li>git commit -am "initial commit"</li>
          <li>git push heroku master</li>
        </ul>
        <Link to="/example"> Demos  </Link>
    </div>
  )
}

export default Welcome;