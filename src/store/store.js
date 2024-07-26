import { createStore } from "redux";
import myReducer from "./reducers.js";

const store = createStore(myReducer);
export default store;
