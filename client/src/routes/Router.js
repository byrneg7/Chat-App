import React from 'react';
import RouteWithLayout from "./RouteWithLayout";
import MainLayout from "../Layouts/main/MainLayout";
import HomePage from "../components/homepage/HomePage";
import {Switch} from "react-router";
import PageNotFound from "../components/pageNotFound/PageNotFound";
import Login from "../components/auth/Login";
import AuthLayout from "../Layouts/auth/AuthLayout";
import Register from "../components/auth/Register";

const Router = () => (
    <>
        <Switch>
            <RouteWithLayout path="/" exact component={HomePage} layout={MainLayout} />
            <RouteWithLayout path="/login" exact component={Login} layout={AuthLayout} />
            <RouteWithLayout path="/signup" exact component={Register} layout={AuthLayout} />
            <RouteWithLayout path="/" exact component={HomePage} layout={MainLayout} />
            <RouteWithLayout component={PageNotFound} layout={MainLayout}/>
        </Switch>
    </>
);

export default Router;