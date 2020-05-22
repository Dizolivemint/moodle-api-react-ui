import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import coursesReducer from '../reducers/courses'
import usersReducer from '../reducers/users'
import filtersReducer from '../reducers/filters'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    const store = createStore(
        combineReducers({
            courses: coursesReducer,
            users: usersReducer,
            filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )

    return store
}