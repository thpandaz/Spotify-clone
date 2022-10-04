import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useStateValue } from '../StateProvider';

const Header = ({spotify}) => {
    const [{user},dispatch] = useStateValue();
    return (
        <div className="header">
            <div className="header-left">
                <SearchIcon />
                <input 
                placeholder='Artist, Songs, or Podcast'
                type="text"
                />
            </div>
            <div className="header-right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
  )
}

export default Header