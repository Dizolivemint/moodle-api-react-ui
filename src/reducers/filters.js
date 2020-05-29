const filtersReducerDefaultState = {
    shortname: ''
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_COURSE_FILTER':
            return {
                ...state,
                shortname: action.shortname
            }
        default:
            return state
    }
}

export default filtersReducer