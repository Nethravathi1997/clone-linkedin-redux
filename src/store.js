import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as UsersReducer } from "./Redux/users/reducer";
import { reducer as FeedsReducer } from "./Redux/feeds/reducer";
import { reducer as JobsReducer } from "./Redux/Jobs/reducer";
import { reducer as CommentsReducer } from "./Redux/comments/reducer";
const rootReducer = combineReducers({
    usersState: UsersReducer,
    feedsState: FeedsReducer,
    jobsState: JobsReducer,
    commentsState: CommentsReducer
});

export const store = createStore(rootReducer, composeWithDevTools() );
console.log(store.getState());