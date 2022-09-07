import React from 'react'
import './hashtag.css'
const Hashtag = ({title , body}) => {
  return (
    <div className="hashTag">
        <h3>{title}</h3>
        <p>{body}</p>
    </div>
  )
}

export default Hashtag