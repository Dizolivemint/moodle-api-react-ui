import React from 'react'

const Spinner = () => (
    <svg width="64px" height="64px" viewBox="0 0 128 128"><rect x="0" y="0" width="100%" height="100%" fill="#FFFFFF" fillOpacity="0"/><g><path fill="#000000" fillOpacity="1" d="M64,128a64,64,0,1,1,64-64A64,64,0,0,1,64,128ZM64,2.75A61.25,61.25,0,1,0,125.25,64,61.25,61.25,0,0,0,64,2.75Z"/><path fill="#000000" fillOpacity="1" d="M64 128a64 64 0 1 1 64-64 64 64 0 0 1-64 64zM64 2.75A61.2 61.2 0 0 0 3.34 72.4c1.28-3.52 3.9-6.32 7.5-6.86 6.55-1 11.9 2.63 13.6 8.08 3.52 11.27.5 23 15 35.25 19.47 16.46 40.34 13.54 52.84 9.46A61.25 61.25 0 0 0 64 2.75z"/><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1000ms" repeatCount="indefinite"></animateTransform></g></svg>
)

export default Spinner