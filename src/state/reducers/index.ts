// to combile all other reducers.
import { combineReducers } from 'redux';
import FactsReducer from "./modules/Facts";

const reducers = combineReducers({  
  facts: FactsReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;