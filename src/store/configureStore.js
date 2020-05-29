import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import coursesReducer from '../reducers/courses'
import usersReducer from '../reducers/users'
import filtersReducer from '../reducers/filters'
import importReducer from '../reducers/import'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    const store = createStore(
        combineReducers({
            courses: coursesReducer,
            users: usersReducer,
            filters: filtersReducer,
            import: importReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )

    return store
}