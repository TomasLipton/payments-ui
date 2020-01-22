import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {Provider} from "react-redux";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Checkout from "./containers/Checkout/Checkout";
import store from "./store";
import PostbackSuccess from "./components/PostbackSuccess/PostbackSuccess";
import PostbackError from "./components/PostbackError/PostbackErroe";

ReactDOM.render(
    <Provider store={store()}>
        <BrowserRouter basename={'/payments/'}>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/checkout" component={Checkout}/>
                <Route exact path="/postback/ok" component={PostbackSuccess}/>
                <Route exact path="/postback/no" component={PostbackError}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);
