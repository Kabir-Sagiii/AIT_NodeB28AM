import { legacy_createStore } from "redux";
import reducers from "./Reducer";

var store = legacy_createStore(reducers);
export default store;
