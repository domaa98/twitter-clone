import React from 'react'
import './leftSide.css'
import HomeIcon from '@mui/icons-material/Home';
import TagIcons from './tagIcon/TagIcons';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ForumIcon from '@mui/icons-material/Forum';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import SubjectIcon from '@mui/icons-material/Subject';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const LeftSide = () => {
  return (
    <div className='left-side'>
        <div className="tags">
            <TagIcons icon = {<HomeIcon/>} title={'Home'}/>
            <TagIcons icon = {<TagIcon/>} title={'Explore'}/>
            <TagIcons icon = {<NotificationsNoneOutlinedIcon/>} title={'Notifications'}/>
            <TagIcons icon = {<ForumIcon/>} title={'Messages'}/>
            <TagIcons icon = {<BookmarksIcon/>} title={'Bookmarkes'}/>
            <TagIcons icon = {<SubjectIcon/>} title={'Lists'}/>
            <TagIcons icon = {<PermIdentityOutlinedIcon/>} title={'Profile'}/>
            <TagIcons icon = {<MoreHorizIcon/>} title={'More'}/>
        </div>

        <div className="btn">
            <button>Tweet</button>
        </div>

        <div className="personal-info">
            <div className="img">
                <img src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="img" />
            </div>

            <div className="info">
                <h4>Mohamed Hassan</h4>
                <span>@mohamed283547</span>
            </div>

            <div className="dots">
                <MoreHorizIcon />
            </div>
        </div>
    </div>
  )
}

export default LeftSide