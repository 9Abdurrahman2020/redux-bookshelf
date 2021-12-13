import { createStore, combineReducers } from "redux";
import bookReducer from "./reducers/bookReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootStore = combineReducers({
    books: bookReducer,
})

const store = createStore(rootStore,composeWithDevTools())

export default store;