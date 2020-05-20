// CREATE_USER
const createUser = ({
    id = null,
    username = '',
    password = '',
    firstname = '',
    lastname = '',
    email = '',
    auth = 'manual',
    createdAt = 0
} = {}) => ({
    type: 'CREATE_USER',
    id,
    username,
    password,
    firstname,
    lastname,
    email,
    auth,
    createdAt
})

// GET_USERS
const getUsers = ({
    id,
    idnumber,
    firstname,
    lastname,
    username,
    email,

} = {}) => ({
    type: 'GET_USERS',
    user: {
        id,
        idnumber,
        firstname,
        lastname,
        username,
        email,
        auth,
        createdAt
    }
})

export { createUser, getUsers }