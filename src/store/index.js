import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

export default () => {
  const store = createStore();
  return store;
};
