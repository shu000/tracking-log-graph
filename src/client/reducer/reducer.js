import { combineReducers } from 'redux';
import customersReducer from './customers';
import sessionsReducer from './sessions';
import templatesReducer from './templates';
import toggleReducer from './toggle';

const rootReducer = combineReducers({
  customers: customersReducer,
  sessions: sessionsReducer,
  template: templatesReducer,
  toggle: toggleReducer
});

export default rootReducer;
