
import './App.css';
import Login from './component/Login';
import React,{useEffect} from 'react';
import { getTokenFromResponse } from './spotify';
// npm install spotify-web-api-js
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './component/Player';
import { useStateValue } from './StateProvider';

const spotify = new SpotifyWebApi(); // supper object that make how content interact with Spotify

function App() {
  const [{user,token}, dispatch] = useStateValue();

  useEffect(() => {
    // get the hash
    const hash = getTokenFromResponse();
    window.location.hash="";
    //make that hash the token
    const _token = hash.access_token;

    if(_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token
      })

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => 
        // As soon as you get the user, you put the data of user into DATA LAYER
        dispatch({
          type:'SET_USER',
          user: user
        })
        );
      
      // won't work if there is already a user this only when the data got pull
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });
      
      spotify.getPlaylist("37i9dQZEVXcSfE9i34DLkG").then((response) => {
        dispatch({
          type: "SET_DISCOVER",
          discover_weekly: response
        });
      });
    }

    
    // give spotify the token
  }, [])
  
  return (
    <div className="App">
      {!token ? <Login /> : <Player spotify={spotify}/>}
    </div>
  );
}

export default App;
