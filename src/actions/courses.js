// CREATE_COURSE
const createCourse = ({
    id = null,
    username = '',
    password = '',
    firstname = '',
    lastname = '',
    email = '',
    auth = 'manual',
    createdAt = 0
} = {}) => ({
    type: 'CREATE_COURSE',
    id,
    username,
    password,
    firstname,
    lastname,
    email,
    auth,
    createdAt
})

// GET_COURSES
const getCourses = ({
    id,
    idnumber,
    firstname,
    lastname,
    username,
    email,

} = {}) => ({
    type: 'GET_COURSES',
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

// IMPORT_COURSE
const importCourse = ({
    courseSourceId,
    courseTargetId,
})

export { createUser, getUsers, importCourse }