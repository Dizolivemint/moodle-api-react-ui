// Get visible courses

export default (courses, { shortname }) => {
    return courses.filter((course) => {
        const shortNameMatch = course.shortname.toLowerCase().includes(shortname.toLowerCase())

        return shortNameMatch
    })
}