import React from 'react'
import { connect } from 'react-redux'
import { setCourseFilter } from '../../actions/filters'

export class FilterCourses extends React.Component {
    onShortNameChange = (e) => {
        this.props.setCourseFilter(e.target.value)
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    className="text-input"
                    placeholder="XXXX.0X.20XX.XX"
                    value={this.props.filters.shortname}
                    onChange={this.onShortNameChange}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
    setCourseFilter: (shortname) => dispatch(setCourseFilter(shortname))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterCourses)