import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from '../components/app';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={App} exact={true} />
            </Switch>
        </div>
    </BrowserRouter>  
);

export default AppRouter;