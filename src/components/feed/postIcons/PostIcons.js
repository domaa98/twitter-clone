import React from 'react'
import './postIcons.css'

const PostIcons = ({icon , title}) => {
  return (
    <div className='post-icon'>
        <div className="icon">{icon}</div>
    </div>
  )
}

export default PostIcons