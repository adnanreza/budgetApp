import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleFunctions from './selectors/expenses';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

// addExpense -> Water bill
store.dispatch(addExpense({ description: 'Water Bill', amount: 450 }));
// addExpense -> Gas bill
store.dispatch(
  addExpense({ description: 'Gas Bill', amount: 120, createdAt: 1000 })
);
// addExpense -> Rent
store.dispatch(
  addExpense({ description: 'Rent', amount: 2040, createdAt: 20 })
);

// // setTextFilter -> bill (2 items) -> water (1 item)
// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//   store.dispatch(setTextFilter('bill'));
// }, 3000);

// getVisibleFunctions -> print visible ones to screen
const state = store.getState();
const visibleExp = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExp);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
