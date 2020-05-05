window.onSpotifyWebPlaybackSDKReady = () => {
    const token = 'BQDrAmf1q6JBUiOwDgUgVCfbXZyR2Lg3e3gd8TGbwOZFoCRl89xbxQQ2LgF8KrnatF6anj795cUu8gkgb__5f-eBBrlLsSQB_ogdmsIs2Tu2Xm5xsHQc_SN0txcbjow-CrIuY95cZpAcfP4ej9hqABbviC6WYol9bnw';
    const player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => { cb(token); }
    });
  
    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error(message); });
    player.addListener('authentication_error', ({ message }) => { console.error(message); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });
  
    // Playback status updates
    player.addListener('player_state_changed', state => { console.log(state); });
  
    // Ready
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
    });
  
    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });
  
    // Connect to the player!
    player.connect();
  };