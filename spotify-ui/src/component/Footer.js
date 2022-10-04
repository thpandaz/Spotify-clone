import React from 'react';
import './Footer.css';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import RepeatOneIcon from '@mui/icons-material/RepeatOne';
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import { Grid, Slider } from "@material-ui/core";

const Footer = () => {

  return (
    <div className='footer'>
      <div className='footer-left'>
        <img src="https://i.scdn.co/image/ab67706c0000bebb7b3f90bbd80ba5dd5538280c" alt="" className='footer-image'/>
        <div className='footer-songInfo'>
          <h4>My Neighbor Totoro</h4>
          <p>Azumi Inoue</p>
        </div>
      </div>
      <div className='footer-center'>
        <div className='footer-icons'>
        <ShuffleIcon className='footer-icon center'/>
        <SkipPreviousIcon className='footer-icon center'/>
        <PlayCircleIcon fontSize="large" className='play center'/>
        <SkipNextIcon className='footer-icon center'/>
        <RepeatIcon className='footer-icon center'/>
        </div>
      </div>
      <div className='footer-right'>
        <Grid container spacing={2}>
            <Grid item>
              <PlaylistPlayIcon className='footer-icon'/>
            </Grid>
            <Grid item>
              <BluetoothIcon style={{transform: 'scale(0.8)'}} className='footer-icon'/>
            </Grid>
            <Grid item>
              <VolumeDownIcon className='footer-icon'/>
            </Grid>
            <Grid item xs>
              <Slider aria-labelledby="continuous-slider" />
            </Grid>
          </Grid>
      </div>
    </div>
  )
}

export default Footer