import React from 'react';
import {connect} from 'react-redux';

import ExpenseListItem from './ExpesnseListItem';
import selectExpenses from './../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expesnse List!</h1>
        {props.expensesL.map(expense => <ExpenseListItem key={expense.id} {...expense}/>)}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expensesL: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList);