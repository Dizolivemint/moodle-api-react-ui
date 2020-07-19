const coursesReducerDefaultState = []

const coursesReducer = (state = coursesReducerDefaultState, action) => {
    // console.log('State', state)
    // console.log('Action', action)
    switch (action.type) {
        case 'RECEIVE_COURSES':
            return [...state, ...action.courses]
        case 'REQUEST_COURSES':
            return state
        default:
            return state
    }
}

export default coursesReducer