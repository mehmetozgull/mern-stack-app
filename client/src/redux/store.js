import { composeWithDevTools } from "@redux-devtools/extension"
import { applyMiddleware, combineReducers, createStore } from "redux"
import { thunk } from "redux-thunk"
import authReducer from "./reducers/auth"
import modalReducer from "./reducers/modal"
import postReducer from "./reducers/post"

const initalState = {

}

const reducers = combineReducers({
    auth: authReducer,
    modal: modalReducer,
    posts: postReducer
})

const store = createStore(reducers, initalState, composeWithDevTools(applyMiddleware(thunk)))

export default store