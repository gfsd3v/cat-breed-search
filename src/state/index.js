import { createStore, combineReducers } from "redux";
import searchReducer from "state/reducers/searchReducer";

const Store = createStore(
  combineReducers({
    searchReducer
  })
);

export default Store;
