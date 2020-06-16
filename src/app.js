import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleFunctions from './selectors/expenses';
import './styles/styles.scss';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

// addExpense -> Water bill
store.dispatch(addExpense({ description: 'Water Bill' }));
// addExpense -> Gas bill
store.dispatch(addExpense({ description: 'Gas Bill' }));
// setTextFilter -> bill (2 items) -> water (1 item)
store.dispatch(setTextFilter('water'));

setTimeout(() => {
  store.dispatch(setTextFilter('rent'));
}, 3000);

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
