import React from 'react'

const Menu = (navigate) => (
    <div>
        <ul>
            <li>Users
                <ul>
                    <li>
                        <button onClick={() => navigate('GET_USERS')}>Get Users</button>
                    </li>
                    <li>
                        <button>Create Users</button>
                    </li>
                </ul>
            </li>
            <li>Courses
                <ul>
                    <li>
                        <button onClick={() => navigate('GET_COURSES')}>Get Courses</button>
                    </li>
                    <li>
                        <button>Create Courses</button>
                    </li>
                    <li>
                        <button onClick={() => navigate('IMPORT_COURSES')}>Import Course</button>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
)

export default Menu