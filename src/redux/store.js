import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './reducers';

const middleWares = [thunk];
const store = createStore(
  rootReducer,
  // composeWithDevTools(applyMiddleware(...middleWares))
  // +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  applyMiddleware(thunk)
);

export { store };
