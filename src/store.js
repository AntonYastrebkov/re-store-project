import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

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

const store = createStore(reducer, applyMiddleware(
    thunkMiddleware, stringMiddleware, logMiddleware));
store.dispatch('HELLO_WORLD');

const timeoutActionCreator = (timeout) => (dispatch) => {
  setTimeout(() => dispatch({
    type: 'DELAYED_ACTION'
  }), timeout);
};

store.dispatch(timeoutActionCreator(3000));

export default store;