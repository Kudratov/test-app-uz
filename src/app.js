import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import AppRouter from './routers/AppRouter'

import configureStore from './store/configureStore';
import {addExpense, editExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/style.scss';

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 34, createdAt: 1223}));
store.dispatch(addExpense({description: 'Gas bill', amount: 444, createdAt: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 20234, createdAt: 1223}));

const updates = {
    description: 'ABC',
    amount: 100
}

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

setTimeout(() => {
    store.dispatch(editExpense('Rent', updates));
}, 3000);

console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));