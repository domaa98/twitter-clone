import React, { useEffect, useState } from 'react'
import './feed.css'
import PostIcons from './postIcons/PostIcons'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Post from '../postSec/Post';
import {posts} from './data'

const FeedSec = () => {

  const [myText , setMyText] = useState('');

  const [newPost , setNewPost] = useState({
    personalImg : "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80",
    name : "Cristiano Ronaldo"	,  
    nickName: "@cristiano",		
});


const handleChange = (e) =>{
  setMyText(e.target.value);
}
const hundleSubmit = () =>{
  posts.unshift(newPost);
  setMyText('');
}

useEffect(() =>{
  setNewPost({...newPost, text : myText});
},[myText])



  return (
    <div>
    <div className="feed-wrapper">
    <div className='feed'>
       <div className="img">
                <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="img" />
       </div>

        <div className="input-data">
            <div className="input">
              <input type="text" placeholder='What is happening... ' value={myText} onChange={handleChange}/>
            </div>

            <div className="input-icons">
              <div className="icons">
                  <PostIcons icon = {<PermMediaIcon />} title = 'Media' />
                  <PostIcons icon = {<GifBoxOutlinedIcon />} title = 'GIF' />
                  <PostIcons icon = {<PollOutlinedIcon />} title = 'Poll' />
                  <PostIcons icon = {<SentimentSatisfiedOutlinedIcon />} title = 'Emoji' />
                  <PostIcons icon = {<CalendarMonthOutlinedIcon />} title = 'Schedule' />
                  <PostIcons icon = {<LocationOnOutlinedIcon />} title = 'Location' />
              </div>
              <div className="btn">
                <button onClick={hundleSubmit}>Tweet</button>
              </div>
            </div>
        </div>
        </div>
    </div>

    <div className="posts">
      {posts.map((posts, index) => { 
       return (<Post key={index} personalImg = {posts.personalImg} name = {posts.name} nickName = {posts.nickName} text = {posts.text} />)
      })}
     
    </div>

    </div>
  )
}

export default FeedSec