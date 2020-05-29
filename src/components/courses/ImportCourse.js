import React from 'react'
import { connect } from "react-redux"
import { importCourses } from '../../actions/import'

class ImportCourse extends React.Component {  
    onImportCourse = () => {
        this.props.importCourses(this.props.courseSourceId, this.props.courseTargetId)
        console.log(this.props.courseSourceId)
        console.log(this.props.courseTargetId)
    }
    render() {
        return (
            <div>
                <p>Source: {this.props.courseSourceId}</p>
                <p>Target: {this.props.courseTargetId}</p>
                <button onClick={() => this.onImportCourse()}>Import Course</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        courseSourceId: state.import.courseSourceId,
        courseTargetId: state.import.courseTargetId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        importCourses: (source, target) => dispatch(importCourses(source, target))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImportCourse)
