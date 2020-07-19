const importReducerDefaultState = {
    courseSourceId: -1,
    courseTargetId: -1
}

const importReducer = (state = importReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_SOURCE_COURSE':
            return {
                ...state,
                courseSourceId: action.courseSourceId
            }
        case 'SET_TARGET_COURSE':
            return {
                ...state,
                courseTargetId: action.courseTargetId
            }
        case 'IMPORT_COURSE_REQUEST':
            return state
        case 'IMPORT_COURSE_FINISH':
            return state
        default:
            return state
    }
}

export default importReducer