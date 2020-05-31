import { createStore, applyMiddleware } from 'redux';

import reducer from './reducers';

const logMiddleware = ({getState, dispatch}) => (next) => (action) => {
  console.log(action.type);
  return next(action);
};

const stringMiddleware = (store) => (next) => (action) => {
  if (typeof action === 'string') {
    return next({ type: action });
  }
  return next(action);
}

const store = createStore(reducer, applyMiddleware(stringMiddleware, logMiddleware));
store.dispatch('HELLO_WORLD');

export default store;