import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Checkout from "./containers/Checkout";
import store from "./store";

ReactDOM.render(
    <Provider store={store()}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/checkout" component={Checkout}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);
