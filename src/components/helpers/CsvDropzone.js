import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import { setTargetCourse, setSourceCourse, importCourses } from '../../actions/import'
import { fetchCoursesByField } from '../../actions/courses'
import Dropzone from "react-dropzone"
import csv from "csvtojson"

export const CsvDropzone = (props) => {
  const [files, setAcceptedFiles] = useState({})
  const [importList, setImportList] = useState([])
  useEffect(() => {
    console.log(importList)
  }, [importList])
  const onDrop = (acceptedFiles, rejectedFiles) => {
    setAcceptedFiles(acceptedFiles)

    acceptedFiles.forEach(file => {
      const reader = new FileReader()

      reader.onload = () => {
        const fileAsBinaryString = reader.result

        csv({
          noheader: true,
          output: "json"
        })
          .fromString(fileAsBinaryString)
          .then(csvRows => {
            const toJson = []
            csvRows.forEach((aCsvRow, i) => {
              if (i !== 0) {
                const builtObject = {}

                Object.keys(aCsvRow).forEach(aKey => {
                  const valueToAddInBuiltObject = aCsvRow[aKey]
                  const keyToAddInBuiltObject = csvRows[0][aKey]
                  builtObject[keyToAddInBuiltObject] = valueToAddInBuiltObject
                })

                toJson.push(builtObject)
              }
            })
            console.log('JSON', toJson)
            
            const asyncForEach = async (array, callback) => {
              for (let index = 0; index < array.length; index++) {
                await callback(array[index], index, array);
              }
            }

            const { fetchCoursesByField, courses } = props
            const start = async () => {
              asyncForEach(toJson, async (row) => {
                const {source, target, clear} = row
                const sourceRes = await fetchCoursesByField('shortname', source)
                console.log('Source Response', sourceRes)
                const sourceId = sourceRes.courses[0].id
                const targetRes = await fetchCoursesByField('shortname', target)
                console.log('Target Response', targetRes)
                const targetId = targetRes.courses[0].id
                console.log('Source to Target', `${sourceId} to ${targetId}`)
              })
            }

            start()

            // toJson.forEach(async (row) => {
            //     const {source, target, clear} = row

            //     await props.fetchCoursesByField('shortname', source)

            //     // console.log('Source to Target', `${sourceId} to ${targetId}`)
            //     // props.setSourceCourse(sourceId)
            //     // props.setTargetCourse(targetId)

            //     // importCourses(source, target, clear)
              
            // })
          })
      }

      reader.onabort = () => console.log("file reading was aborted")
      reader.onerror = () => console.log("file reading has failed")

      reader.readAsText(file, 'ISO-8859-1')
    })
  }

  return (
    <Dropzone onDrop={onDrop}>
        {({getRootProps, getInputProps}) => (
            <section>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            </section>
        )}
    </Dropzone>
  )
}

const mapStateToProps = (state) => {
  return {
      courses: state.courses,
      isFetching: state.isFetching
  }
}

const mapDispatchToProps = (dispatch) => ({
  setTargetCourse: (target) => dispatch(setTargetCourse(target)),
  setSourceCourse: (source) => dispatch(setSourceCourse(source)),
  importCourses: (source, target, clear) => dispatch(importCourses(source, target, clear)),
  fetchCoursesByField: (field, value) => dispatch(fetchCoursesByField(field, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(CsvDropzone)