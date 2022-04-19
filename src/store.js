import { combineReducers, createStore } from "redux";
import { reducer as FeedsReducer } from "./Redux/reducer";

const rootReducer = combineReducers({
    feedsState: FeedsReducer
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__() );
console.log(store.getState());