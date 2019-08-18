import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Search from '../Search';
import ShowPage from '../ShowPage';

import './AppRouter.css';

export default function AppRouter() {
    return (
        <div className="App">
            <Switch>
                <Route path="/shows/:id" component={ShowPage} />
                <Route component={Search} />
            </Switch>
        </div>
    );
}
