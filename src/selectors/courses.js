// Get visible courses

export default (courses, { shortName }) => {
    return courses.filter((course) => {
        const shortNameMatch = course.shortname.toLowerCase().includes(shortName.toLowerCase())

        return shortNameMatch
    })
}