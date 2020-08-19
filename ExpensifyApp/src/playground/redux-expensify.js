import { createStore, combineReducers } from 'redux';


// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
      default:
          return state;
  }
};

// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'fhalkjhfkaj',
        description: 'Hollister Shopping',
        note: 'This was the final payment for that store.',
        amount: 5000,
        createdAt: 0
    }],
    filters: {
        text: 'shopping',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};
