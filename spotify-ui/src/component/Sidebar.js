import React from 'react'
import './Sidebar.css'
import SideBarOption from './SideBarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useStateValue } from '../StateProvider';

const Sidebar = () => {
  const [{ playlists }, dispatch] = useStateValue();


  return (
    <div className='side-bar'>
        
            <img
                className="sidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="logo"
            />
            <SideBarOption Icon={HomeIcon} title="Home"/>
            <SideBarOption Icon={SearchIcon} title="Search"/>
            <SideBarOption Icon={LibraryMusicIcon}title="Your Library"/>
            <br/>
            <strong className='sidebar-title'>PLAYLIST</strong>
            <hr/>
            <div className='sidebar-playlist'>
            {playlists?.items?.map((playlist) => (
            <SideBarOption key={playlist.id} title={playlist.name} />
            ))}
            </div>

    </div>
  )
}

export default Sidebar