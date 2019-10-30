import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import store from "./store";
import NotFound from "./components/NotFound/NotFound";


ReactDOM.render(
    <Provider store={store()}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);
