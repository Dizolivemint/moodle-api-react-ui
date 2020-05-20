const usersReducerDefaultState = []

const usersReducer = (state = usersReducerDefaultState, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return [
                ...state,
                action.user
            ]
        case 'CREATE_USER':
            return
        case 'EDIT_USER':
            return
        default:
            return state
    }
}

export default usersReducer