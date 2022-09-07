import React from 'react'
import './tagIcon.css'

const TagIcons = ({icon , title}) => {
  return (
    <div className='tag-icon'>
        <div className="icon">{icon}</div>
        <div className="title">{title}</div>
    </div>
  )
}

export default TagIcons