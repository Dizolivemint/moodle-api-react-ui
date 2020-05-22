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
        case 'IMPORT_COURSE':
            return [
                ...state,
                action.success
            ]
        case 'EDIT_COURSE':
            return
        default:
            return state
    }
}

export default coursesReducer