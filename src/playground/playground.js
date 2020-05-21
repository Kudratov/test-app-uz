import {createStore, combineReducers} from 'redux';


const addExpense = ({id ='', description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
        expense: {
            id,
            description,
            note,
            amount,
            createdAt
        }
});

const removeExpense = ({id}={}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});


const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => {
                return expense.id !== action.id;
            });
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return {
                        ...expense, ...action.updates
                    };
                } else {
                    expense;
                }
            });
        default:
            return state;
    }
};

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

const sortByAmount = (sortBy='') => ({
    type: 'SORT_BY_AMOUNT',
    sortBy
});

const sortByDate = (sortBy='') => ({
    type: 'SORT_BY_DATE',
    sortBy
})

const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE',
    startDate
}); 

const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE',
    endDate
});

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return {...state, text: action.text}
        case 'SORT_BY_AMOUNT': 
            return {...state, sortBy: action.sortBy}
        case 'SORT_BY_DATE':
            return {...state, sortBy: action.sortBy}
        case 'SET_START_DATE':
            return {...state, startDate: action.startDate}
        case 'SET_END_DATE':
            return {...state, endDate: action.endDate}
        default:
            return state;
    }
}

const setMessage = ({message = '', createdAt=''}={}) => ({
    type: 'SET_MESSAGE',
    messages: {
        message,
        createdAt
    }
})

const messageReducerDefaultState = 
[ 
    
];

const messageReducer = (state = messageReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_MESSAGE':
            return [...state, action.messages]
        default:
            return state;
    }
};

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer,
    messages: messageReducer
}));

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({id: "1", description: 'Rent', amount: 100, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({id: "2", description: 'Just', amount: 101, createdAt: -1000}));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 232}));

// store.dispatch(setTextFilter('ffe'));

store.dispatch(sortByAmount('amount'));
// store.dispatch(sortByDate('date'));

// store.dispatch(setMessage({message: 'message'}));
// store.dispatch(setMessage({message: 'message', createdAt: '12312'}));

// store.dispatch(setStartDate(-2000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1234));