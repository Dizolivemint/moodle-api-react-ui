const filtersReducerDefaultState = {
    shortName: 'WS800'
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_COURSE_FILTER':
            return {
                ...state,
                shortName: action.shortName
            }
        default:
            return state
    }
}

export default filtersReducer