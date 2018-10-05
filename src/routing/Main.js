import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeView from '../components/HomeView';

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={HomeView} />
            </Switch>
        </main>
    );
};

export default Main;