import { combineReducers, createStore } from "redux";
import { reducer as UsersReducer } from "./Redux/users/reducer";
import { reducer as FeedsReducer } from "./Redux/feeds/reducer";
import { reducer as JobsReducer } from "./Redux/Jobs/reducer";

const rootReducer = combineReducers({
    usersState: UsersReducer,
    feedsState: FeedsReducer,
    jobsState: JobsReducer
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__() );
console.log(store.getState());