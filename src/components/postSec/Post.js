import React from 'react'
import './post.css'
import VerifiedIcon from '@mui/icons-material/Verified';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReplyIcon from '@mui/icons-material/Reply';
import IosShareIcon from '@mui/icons-material/IosShare';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const Post = ({personalImg , name , nickName , text}) => {
  return (
    <div className='post-wrapper'>
        <div className="personal-image">
            <img src={personalImg} alt="i" />
        </div>

        <div className="post-info">
            <div className="top-section">
                <h3>{name}</h3>
                <VerifiedIcon />
                <span>{nickName}</span>
            </div>
            <div className="mid-section">
                  <p>{text}</p> 
            </div>
            <div className="bottom-section">
                <div><FavoriteBorderIcon /></div>
                <div><ReplyIcon /></div>
                <div><IosShareIcon /></div>
                <div><ChatBubbleOutlineIcon /></div>
            </div>
        </div>
    </div>
  )
}

export default Post