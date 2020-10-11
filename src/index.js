import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  
import './index.css';
import App from './App'
import BorrowerApp from './BorrowerApp'
import LenderApp from './LenderApp'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/borrower" component={BorrowerApp} />
        <Route path="/lender" component={LenderApp} />
        <Route path="/" component={BorrowerApp} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
