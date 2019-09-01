import { combineReducers } from 'redux';
import customersReducer from './customers';
import sessionsReducer from './sessions';
import templatesReducer from './templates';

const rootReducer = combineReducers({
  customers: customersReducer,
  sessions: sessionsReducer,
  template: templatesReducer
});

export default rootReducer;
