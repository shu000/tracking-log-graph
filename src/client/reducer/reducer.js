import { combineReducers } from 'redux';
import sessionsReducer from './sessions';
import templatesReducer from './templates';

const rootReducer = combineReducers({
  sessions: sessionsReducer,
  template: templatesReducer
});

export default rootReducer;
