import React from 'react';
import {connect} from 'react-redux';

import {setTextFilter, sortByAmount, sortByDate} from './../actions/filters';


const ExpenseListFilters = (props) => (
    <div>
        <input type="text" value={props.filtersL.text} onChange={(e) => {
            props.dispatch(setTextFilter(e.target.value));
        }}/>
        <select value={props.filtersL.sortBy} onChange={(e) => {
            if(e.target.value === 'date'){
                props.dispatch(sortByDate(e.target.value));
            } else{
                props.dispatch(sortByAmount(e.target.value));
            }
        }}>
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filtersL: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);