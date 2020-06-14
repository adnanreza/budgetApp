import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>this is from my dashboard component</div>
);

const routes = (
  <BrowserRouter>
    <Route path='/' component={ExpenseDashboardPage} />
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
