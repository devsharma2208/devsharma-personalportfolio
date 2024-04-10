import { createStore } from "redux";
import stateManage from "./Reducer";

const store = createStore(stateManage);
export default store;
