import React from 'react';
import RouteWithLayout from "./RouteWithLayout";
import LandingPageLayout from "../Layouts/main/LandingPageLayout";
import LandingPage from "../components/landingPage/LandingPage";
import {Switch} from "react-router";
import PageNotFound from "../components/pageNotFound/PageNotFound";
import Login from "../components/auth/Login";
import AuthLayout from "../Layouts/auth/AuthLayout";
import Register from "../components/auth/Register";

const Router = () => (
    <>
        <Switch>
            <RouteWithLayout path="/" exact component={LandingPage} layout={LandingPageLayout} />
            <RouteWithLayout path="/login" exact component={Login} layout={AuthLayout} />
            <RouteWithLayout path="/signup" exact component={Register} layout={AuthLayout} />
            <RouteWithLayout path="/" exact component={LandingPage} layout={LandingPageLayout} />
            <RouteWithLayout component={PageNotFound} layout={LandingPageLayout}/>
        </Switch>
    </>
);

export default Router;