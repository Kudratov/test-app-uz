import uuid from 'uuid';

export const addExpense = ({id ='', description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
        expense: {
            id: description,
            description,
            note,
            amount,
            createdAt
        }
});

export const removeExpense = ({id}={}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});