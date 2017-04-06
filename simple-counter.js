import { createStore } from 'redux';

const todos = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [
      ...state,
      {
        description: action.description
      }
    ];
    case 'delete':
      return [
      ...state.slice(0, action.index),
      ...state.slice(action.index + 1)
    ]
    default:
      return state
  }
}

const store = createStore(todos);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: 'add',
  description: 'buy eggs'
});

store.dispatch({
  type: 'add',
  description: 'eat hotpot'
});

store.dispatch({
  type: 'delete',
  index: 1
});
