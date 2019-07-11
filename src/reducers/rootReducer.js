import { combineReducers } from 'redux';

import counts from './countReducer';

const rootReducer = combineReducers({
     counts: counts,
});

export default rootReducer;