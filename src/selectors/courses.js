// Get visible courses

export default (courses, { shortname }) => {
    // console.log('Courses filter', courses)
    // console.log('Shortname', shortname)
    window.courses = courses
    return courses.filter((course) => {
        const shortNameMatch = course.shortname.toLowerCase().includes(shortname.toLowerCase())

        return shortNameMatch
    })
}