import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import SearchIcon from '@mui/icons-material/Search';
import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="left-section">
            <div className="icon">
                <TwitterIcon className='twitter-icon'/> 
            </div>
        </div>

        <div className="mid-section">
            <h2>Home</h2>
            <div className="star">
                <AutoAwesomeOutlinedIcon/>
            </div>
        </div>

        <div className="right-section">
            <div className="search">
                <div className="search-icon">
                    <SearchIcon className='search-icon'/>
                </div>
                <input type="text" placeholder='Search Twitter'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar