import React from 'react'
import { connect } from 'react-redux'
import { fetchCourses } from '../actions/courses'

class GetCourses extends React.Component {
    onSubmit = () => {
        this.props.fetchCourses()
    }

    render() {
        return (
            <div>
                <button onClick={() => this.onSubmit()}>
                    Get Courses
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchCourses: () => dispatch(fetchCourses())
})

export default connect(undefined, mapDispatchToProps)(GetCourses)
