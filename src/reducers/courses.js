const coursesReducerDefaultState = []

const coursesReducer = (state = coursesReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_COURSES':
            return [
                ...state,
                action.courses
            ]
        case 'RECEIVE_COURSES':
            return action.courses
        case 'REQUEST_COURSES':
            return state
        case 'EDIT_COURSE':
            return
        default:
            return state
    }
}

export default coursesReducer